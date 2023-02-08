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
var ParticleUtils_1 = require("./ParticleUtils");
var PropertyList_1 = require("./PropertyList");
var Sprite = PIXI.Sprite;
/**
 * An individual particle image. You shouldn't have to deal with these.
 * @memberof PIXI.particles
 * @class Particle
 * @extends PIXI.Sprite
 * @constructor
 * @param {PIXI.particles.Emitter} emitter The emitter that controls this particle.
 */
var Particle = /** @class */ (function(_super) {
    __extends(Particle, _super);

    function Particle(emitter) {
        var _this =
            //start off the sprite with a blank texture, since we are going to replace it
            //later when the particle is initialized.
            _super.call(this) || this;
        _this.emitter = emitter;
        //particles should be centered
        _this.anchor.x = _this.anchor.y = 0.5;
        _this.velocity = new PIXI.Point();
        _this.maxLife = 0;
        _this.age = 0;
        _this.ease = null;
        _this.extraData = null;
        _this.alphaList = new PropertyList_1.default();
        _this.speedList = new PropertyList_1.default();
        _this.speedMultiplier = 1;
        /**
         * Acceleration to apply to the particle.
         * @property {PIXI.Point} accleration
         */
        _this.acceleration = new PIXI.Point();
        /**
         * The maximum speed allowed for accelerating particles. Negative values, values of 0 or NaN
         * will disable the maximum speed.
         * @property {Number} maxSpeed
         * @default NaN
         */
        _this.maxSpeed = NaN;
        /**
         * The scale of the particle throughout its life.
         * @property {PIXI.particles.PropertyList} scaleList
         */
        _this.scaleList = new PropertyList_1.default();
        /**
         * A multiplier from 0-1 applied to the scale of the particle at all times.
         * @property {number} scaleMultiplier
         */
        _this.scaleMultiplier = 1;
        /**
         * The tint of the particle throughout its life.
         * @property {PIXI.particles.PropertyList} colorList
         */
        _this.colorList = new PropertyList_1.default(true);
        /**
         * If alpha should be interpolated at all.
         * @property {Boolean} _doAlpha
         * @private
         */
        _this._doAlpha = false;
        /**
         * If scale should be interpolated at all.
         * @property {Boolean} _doScale
         * @private
         */
        _this._doScale = false;
        /**
         * If speed should be interpolated at all.
         * @property {Boolean} _doSpeed
         * @private
         */
        _this._doSpeed = false;
        /**
         * If acceleration should be handled at all. _doSpeed is mutually exclusive with this,
         * and _doSpeed gets priority.
         * @property {Boolean} _doAcceleration
         * @private
         */
        _this._doAcceleration = false;
        /**
         * If color should be interpolated at all.
         * @property {Boolean} _doColor
         * @private
         */
        _this._doColor = false;
        /**
         * If normal movement should be handled. Subclasses wishing to override movement
         * can set this to false in init().
         * @property {Boolean} _doNormalMovement
         * @private
         */
        _this._doNormalMovement = false;
        /**
         * One divided by the max life of the particle, saved for slightly faster math.
         * @property {Number} _oneOverLife
         * @private
         */
        _this._oneOverLife = 0;
        /**
         * Reference to the next particle in the list.
         * @property {Particle} next
         * @private
         */
        _this.next = null;
        /**
         * Reference to the previous particle in the list.
         * @property {Particle} prev
         * @private
         */
        _this.prev = null;
        //save often used functions on the instance instead of the prototype for better speed
        _this.init = _this.init;
        _this.Particle_init = Particle.prototype.init;
        _this.update = _this.update;
        _this.Particle_update = Particle.prototype.update;
        _this.Sprite_destroy = _super.prototype.destroy;
        _this.Particle_destroy = Particle.prototype.destroy;
        _this.applyArt = _this.applyArt;
        _this.kill = _this.kill;
        return _this;
    }
    /**
     * Initializes the particle for use, based on the properties that have to
     * have been set already on the particle.
     * @method PIXI.particles.Particle#init
     */
    Particle.prototype.init = function() {
        //reset the age
        this.age = 0;
        //set up the velocity based on the start speed and rotation
        this.velocity.x = this.speedList.current.value * this.speedMultiplier;
        this.velocity.y = 0;
        ParticleUtils_1.default.rotatePoint(this.rotation, this.velocity);
        if (this.noRotation) {
            this.rotation = 0;
        } else {
            //convert rotation to Radians from Degrees
            this.rotation *= ParticleUtils_1.default.DEG_TO_RADS;
        }
        //convert rotation speed to Radians from Degrees
        this.rotationSpeed *= ParticleUtils_1.default.DEG_TO_RADS;
        //set alpha to inital alpha
        this.alpha = this.alphaList.current.value;
        //set scale to initial scale
        this.scale.x = this.scale.y = this.scaleList.current.value;
        //figure out what we need to interpolate
        this._doAlpha = !!this.alphaList.current.next;
        this._doSpeed = !!this.speedList.current.next;
        this._doScale = !!this.scaleList.current.next;
        this._doColor = !!this.colorList.current.next;
        this._doAcceleration = this.acceleration.x !== 0 || this.acceleration.y !== 0;
        //_doNormalMovement can be cancelled by subclasses
        this._doNormalMovement = this._doSpeed || this.speedList.current.value !== 0 || this._doAcceleration;
        //save our lerp helper
        this._oneOverLife = 1 / this.maxLife;
        //set the inital color
        var color = this.colorList.current.value;
        this.tint = ParticleUtils_1.default.combineRGBComponents(color.r, color.g, color.b);
        //ensure visibility
        this.visible = true;
    };
    /**
     * Sets the texture for the particle. This can be overridden to allow
     * for an animated particle.
     * @method PIXI.particles.Particle#applyArt
     * @param {PIXI.Texture} art The texture to set.
     */
    Particle.prototype.applyArt = function(art) {
        this.texture = art || PIXI.Texture.EMPTY;
    };
    /**
     * Updates the particle.
     * @method PIXI.particles.Particle#update
     * @param {Number} delta Time elapsed since the previous frame, in __seconds__.
     * @return {Number} The standard interpolation multiplier (0-1) used for all relevant particle
     *                   properties. A value of -1 means the particle died of old age instead.
     */
    Particle.prototype.update = function(delta) {
        //increase age
        this.age += delta;
        //recycle particle if it is too old
        if (this.age >= this.maxLife) {
            this.kill();
            return -1;
        }
        //determine our interpolation value
        var lerp = this.age * this._oneOverLife; //lifetime / maxLife;
        if (this.ease) {
            if (this.ease.length == 4) {
                //the t, b, c, d parameters that some tween libraries use
                //(time, initial value, end value, duration)
                lerp = this.ease(lerp, 0, 1, 1);
            } else {
                //the simplified version that we like that takes
                //one parameter, time from 0-1. TweenJS eases provide this usage.
                lerp = this.ease(lerp);
            }
        }
        //interpolate alpha
        if (this._doAlpha)
            this.alpha = this.alphaList.interpolate(lerp);
        //interpolate scale
        if (this._doScale) {
            var scale = this.scaleList.interpolate(lerp) * this.scaleMultiplier;
            this.scale.x = this.scale.y = scale;
        }
        //handle movement
        if (this._doNormalMovement) {
            //interpolate speed
            if (this._doSpeed) {
                var speed = this.speedList.interpolate(lerp) * this.speedMultiplier;
                ParticleUtils_1.default.normalize(this.velocity);
                ParticleUtils_1.default.scaleBy(this.velocity, speed);
            } else if (this._doAcceleration) {
                this.velocity.x += this.acceleration.x * delta;
                this.velocity.y += this.acceleration.y * delta;
                if (this.maxSpeed) {
                    var currentSpeed = ParticleUtils_1.default.length(this.velocity);
                    //if we are going faster than we should, clamp at the max speed
                    //DO NOT recalculate vector length
                    if (currentSpeed > this.maxSpeed) {
                        ParticleUtils_1.default.scaleBy(this.velocity, this.maxSpeed / currentSpeed);
                    }
                }
            }
            //adjust position based on velocity
            this.position.x += this.velocity.x * delta;
            this.position.y += this.velocity.y * delta;
        }
        //interpolate color
        if (this._doColor) {
            this.tint = this.colorList.interpolate(lerp);
        }
        //update rotation
        if (this.rotationSpeed !== 0) {
            this.rotation += this.rotationSpeed * delta;
        } else if (this.acceleration && !this.noRotation) {
            this.rotation = Math.atan2(this.velocity.y, this.velocity.x); // + Math.PI / 2;
        }
        return lerp;
    };
    /**
     * Kills the particle, removing it from the display list
     * and telling the emitter to recycle it.
     * @method PIXI.particles.Particle#kill
     */
    Particle.prototype.kill = function() {
        this.emitter.recycle(this);
    };
    /**
     * Destroys the particle, removing references and preventing future use.
     * @method PIXI.particles.Particle#destroy
     */
    Particle.prototype.destroy = function() {
        if (this.parent)
            this.parent.removeChild(this);
        this.Sprite_destroy();
        this.emitter = this.velocity = this.colorList = this.scaleList = this.alphaList =
            this.speedList = this.ease = this.next = this.prev = null;
    };
    /**
     * Checks over the art that was passed to the Emitter's init() function, to do any special
     * modifications to prepare it ahead of time.
     * @method PIXI.particles.Particle.parseArt
     * @static
     * @param  {Array} art The array of art data. For Particle, it should be an array of Textures.
     *                     Any strings in the array will be converted to Textures via
     *                     Texture.fromImage().
     * @return {Array} The art, after any needed modifications.
     */
    Particle.parseArt = function(art) {
        //convert any strings to Textures.
        var i;
        for (i = art.length; i >= 0; --i) {
            if (typeof art[i] == "string")
                art[i] = PIXI.Texture.fromImage(art[i]);
        }
        //particles from different base textures will be slower in WebGL than if they
        //were from one spritesheet
        if (ParticleUtils_1.default.verbose) {
            for (i = art.length - 1; i > 0; --i) {
                if (art[i].baseTexture != art[i - 1].baseTexture) {
                    if (window.console)
                        console.warn("PixiParticles: using particle textures from different images may hinder performance in WebGL");
                    break;
                }
            }
        }
        return art;
    };
    /**
     * Parses extra emitter data to ensure it is set up for this particle class.
     * Particle does nothing to the extra data.
     * @method PIXI.particles.Particle.parseData
     * @static
     * @param  {Object} extraData The extra data from the particle config.
     * @return {Object} The parsed extra data.
     */
    Particle.parseData = function(extraData) {
        return extraData;
    };
    return Particle;
}(Sprite));
exports.default = Particle;