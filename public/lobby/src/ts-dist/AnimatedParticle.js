"use strict";
var __extends = (this && this.__extends) || (function() {
    var extendStatics = Object.setPrototypeOf ||
        ({
                __proto__: []
            }
            instanceof Array && function(d, b) {
                d.__proto__ = b;
            }) ||
        function(d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function(d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", {
    value: true
});
var Particle_1 = require("./Particle");
var Texture = PIXI.Texture;
/**
 * An individual particle image with an animation. Art data passed to the emitter must be
 * formatted in a particular way for AnimatedParticle to be able to handle it:
 *
 *     {
 *         //framerate is required. It is the animation speed of the particle in frames per
 *         //second.
 *         //A value of "matchLife" causes the animation to match the lifetime of an individual
 *         //particle, instead of at a constant framerate. This causes the animation to play
 *         //through one time, completing when the particle expires.
 *         framerate: 6,
 *         //loop is optional, and defaults to false.
 *         loop: true,
 *         //textures is required, and can be an array of any (non-zero) length.
 *         textures: [
 *             //each entry represents a single texture that should be used for one or more
 *             //frames. Any strings will be converted to Textures with Texture.fromImage().
 *             //Instances of PIXI.Texture will be used directly.
 *             "animFrame1.png",
 *             //entries can be an object with a 'count' property, telling AnimatedParticle to
 *             //use that texture for 'count' frames sequentially.
 *             {
 *                 texture: "animFrame2.png",
 *                 count: 3
 *             },
 *             "animFrame3.png"
 *         ]
 *     }
 *
 * @memberof PIXI.particles
 * @class AnimatedParticle
 * @extends PIXI.particles.Particle
 * @constructor
 * @param {PIXI.particles.Emitter} emitter The emitter that controls this AnimatedParticle.
 */
var AnimatedParticle = /** @class */ (function(_super) {
    __extends(AnimatedParticle, _super);

    function AnimatedParticle(emitter) {
        var _this = _super.call(this, emitter) || this;
        _this.textures = null;
        _this.duration = 0;
        _this.framerate = 0;
        _this.elapsed = 0;
        _this.loop = false;
        return _this;
    }
    /**
     * Initializes the particle for use, based on the properties that have to
     * have been set already on the particle.
     * @method PIXI.particles.AnimatedParticle#init
     */
    AnimatedParticle.prototype.init = function() {
        this.Particle_init();
        this.elapsed = 0;
        //if the animation needs to match the particle's life, then cacluate variables
        if (this.framerate < 0) {
            this.duration = this.maxLife;
            this.framerate = this.textures.length / this.duration;
        }
    };
    /**
     * Sets the textures for the particle.
     * @method PIXI.particles.AnimatedParticle#applyArt
     * @param {Array} art An array of PIXI.Texture objects for this animated particle.
     */
    AnimatedParticle.prototype.applyArt = function(art) {
        this.textures = art.textures;
        this.framerate = art.framerate;
        this.duration = art.duration;
        this.loop = art.loop;
    };
    /**
     * Updates the particle.
     * @method PIXI.particles.AnimatedParticle#update
     * @param {Number} delta Time elapsed since the previous frame, in __seconds__.
     */
    AnimatedParticle.prototype.update = function(delta) {
        var lerp = this.Particle_update(delta);
        //only animate the particle if it is still alive
        if (lerp >= 0) {
            this.elapsed += delta;
            if (this.elapsed > this.duration) {
                //loop elapsed back around
                if (this.loop)
                    this.elapsed = this.elapsed % this.duration;
                else
                    this.elapsed = this.duration - 0.000001;
            }
            var frame = (this.elapsed * this.framerate + 0.0000001) | 0;
            this.texture = this.textures[frame] || PIXI.Texture.EMPTY;
        }
        return lerp;
    };
    /**
     * Destroys the particle, removing references and preventing future use.
     * @method PIXI.particles.AnimatedParticle#destroy
     */
    AnimatedParticle.prototype.destroy = function() {
        this.Particle_destroy();
        this.textures = null;
    };
    /**
     * Checks over the art that was passed to the Emitter's init() function, to do any special
     * modifications to prepare it ahead of time.
     * @method PIXI.particles.AnimatedParticle.parseArt
     * @static
     * @param  {Array} art The array of art data, properly formatted for AnimatedParticle.
     * @return {Array} The art, after any needed modifications.
     */
    AnimatedParticle.parseArt = function(art) {
        var data, output, textures, tex, outTextures;
        var outArr = [];
        for (var i = 0; i < art.length; ++i) {
            data = art[i];
            outArr[i] = output = {};
            output.textures = outTextures = [];
            textures = data.textures;
            for (var j = 0; j < textures.length; ++j) {
                tex = textures[j];
                if (typeof tex == "string")
                    outTextures.push(Texture.fromImage(tex));
                else if (tex instanceof Texture)
                    outTextures.push(tex);
                else {
                    var dupe = tex.count || 1;
                    if (typeof tex.texture == "string")
                        tex = Texture.fromImage(tex.texture);
                    else
                        tex = tex.texture;
                    for (; dupe > 0; --dupe) {
                        outTextures.push(tex);
                    }
                }
            }
            //use these values to signify that the animation should match the particle life time.
            if (data.framerate == "matchLife") {
                //-1 means that it should be calculated
                output.framerate = -1;
                output.duration = 0;
                output.loop = false;
            } else {
                //determine if the animation should loop
                output.loop = !!data.loop;
                //get the framerate, default to 60
                output.framerate = data.framerate > 0 ? data.framerate : 60;
                //determine the duration
                output.duration = outTextures.length / output.framerate;
            }
        }
        return outArr;
    };
    return AnimatedParticle;
}(Particle_1.default));
exports.default = AnimatedParticle;