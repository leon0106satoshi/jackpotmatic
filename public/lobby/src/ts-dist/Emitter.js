"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var ParticleUtils_1 = require("./ParticleUtils");
var Particle_1 = require("./Particle");
var PropertyNode_1 = require("./PropertyNode");
var ticker = PIXI.ticker.shared;
var helperPoint = new PIXI.Point();
/**
 * A particle emitter.
 * @memberof PIXI.particles
 * @class Emitter
 * @constructor
 * @param {PIXI.Container} particleParent The container to add the
 *                                                     particles to.
 * @param {Array|PIXI.Texture|String} [particleImages] A texture or array of textures to use
 *                                                     for the particles. Strings will be turned
 *                                                     into textures via Texture.fromImage().
 * @param {Object} [config] A configuration object containing settings for the emitter.
 * @param {Boolean} [config.emit=true] If config.emit is explicitly passed as false, the Emitter
 *                                     will start disabled.
 * @param {Boolean} [config.autoUpdate=false] If config.emit is explicitly passed as true, the Emitter
 *                                     will automatically call update via the PIXI shared ticker.
 */
var Emitter = /** @class */ (function() {
    function Emitter(particleParent, particleImages, config) {
        this._particleConstructor = Particle_1.default;
        //properties for individual particles
        this.particleImages = null;
        this.startAlpha = null;
        this.startSpeed = null;
        this.minimumSpeedMultiplier = 1;
        this.acceleration = null;
        this.maxSpeed = NaN;
        this.startScale = null;
        this.minimumScaleMultiplier = 1;
        this.startColor = null;
        this.minLifetime = 0;
        this.maxLifetime = 0;
        this.minStartRotation = 0;
        this.maxStartRotation = 0;
        this.noRotation = false;
        this.minRotationSpeed = 0;
        this.maxRotationSpeed = 0;
        this.particleBlendMode = 0;
        this.customEase = null;
        this.extraData = null;
        //properties for spawning particles
        this._frequency = 1;
        this.spawnChance = 1;
        this.maxParticles = 1000;
        this.emitterLifetime = -1;
        this.spawnPos = null;
        this.spawnType = null;
        this._spawnFunc = null;
        this.spawnRect = null;
        this.spawnCircle = null;
        this.particlesPerWave = 1;
        this.particleSpacing = 0;
        this.angleStart = 0;
        //emitter properties
        this.rotation = 0;
        this.ownerPos = null;
        this._prevEmitterPos = null;
        this._prevPosIsValid = false;
        this._posChanged = false;
        this._parent = null;
        this.addAtBack = false;
        this.particleCount = 0;
        this._emit = false;
        this._spawnTimer = 0;
        this._emitterLife = -1;
        this._activeParticlesFirst = null;
        this._activeParticlesLast = null;
        this._poolFirst = null;
        this._origConfig = null;
        this._origArt = null;
        this._autoUpdate = false;
        this._destroyWhenComplete = false;
        this._completeCallback = null;
        //set the initial parent
        this.parent = particleParent;
        if (particleImages && config)
            this.init(particleImages, config);
        //save often used functions on the instance instead of the prototype for better speed
        this.recycle = this.recycle;
        this.update = this.update;
        this.rotate = this.rotate;
        this.updateSpawnPos = this.updateSpawnPos;
        this.updateOwnerPos = this.updateOwnerPos;
    }
    Object.defineProperty(Emitter.prototype, "frequency", {
        /**
         * Time between particle spawns in seconds. If this value is not a number greater than 0,
         * it will be set to 1 (particle per second) to prevent infinite loops.
         * @member {Number} PIXI.particles.Emitter#frequency
         */
        get: function() {
            return this._frequency;
        },
        set: function(value) {
            //do some error checking to prevent infinite loops
            if (typeof value == "number" && value > 0)
                this._frequency = value;
            else
                this._frequency = 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Emitter.prototype, "particleConstructor", {
        /**
         * The constructor used to create new particles. The default is
         * the built in Particle class. Setting this will dump any active or
         * pooled particles, if the emitter has already been used.
         * @member {Function} PIXI.particles.Emitter#particleConstructor
         */
        get: function() {
            return this._particleConstructor;
        },
        set: function(value) {
            if (value != this._particleConstructor) {
                this._particleConstructor = value;
                //clean up existing particles
                this.cleanup();
                //scrap all the particles
                for (var particle = this._poolFirst; particle; particle = particle.next) {
                    particle.destroy();
                }
                this._poolFirst = null;
                //re-initialize the emitter so that the new constructor can do anything it needs to
                if (this._origConfig && this._origArt)
                    this.init(this._origArt, this._origConfig);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Emitter.prototype, "parent", {
        /**
         * The container to add particles to. Settings this will dump any active particles.
         * @member {PIXI.Container} PIXI.particles.Emitter#parent
         */
        get: function() {
            return this._parent;
        },
        set: function(value) {
            this.cleanup();
            this._parent = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets up the emitter based on the config settings.
     * @method PIXI.particles.Emitter#init
     * @param {Array|PIXI.Texture} art A texture or array of textures to use for the particles.
     * @param {Object} config A configuration object containing settings for the emitter.
     */
    Emitter.prototype.init = function(art, config) {
        if (!art || !config)
            return;
        //clean up any existing particles
        this.cleanup();
        //store the original config and particle images, in case we need to re-initialize
        //when the particle constructor is changed
        this._origConfig = config;
        this._origArt = art;
        //set up the array of data, also ensuring that it is an array
        art = Array.isArray(art) ? art.slice() : [art];
        //run the art through the particle class's parsing function
        var partClass = this._particleConstructor;
        this.particleImages = partClass.parseArt ? partClass.parseArt(art) : art;
        ///////////////////////////
        // Particle Properties   //
        ///////////////////////////
        //set up the alpha
        if (config.alpha) {
            this.startAlpha = PropertyNode_1.default.createList(config.alpha);
        } else
            this.startAlpha = new PropertyNode_1.default(1, 0);
        //set up the speed
        if (config.speed) {
            this.startSpeed = PropertyNode_1.default.createList(config.speed);
            this.minimumSpeedMultiplier = config.speed.minimumSpeedMultiplier || 1;
        } else {
            this.minimumSpeedMultiplier = 1;
            this.startSpeed = new PropertyNode_1.default(0, 0);
        }
        //set up acceleration
        var acceleration = config.acceleration;
        if (acceleration && (acceleration.x || acceleration.y)) {
            //make sure we disable speed interpolation
            this.startSpeed.next = null;
            this.acceleration = new PIXI.Point(acceleration.x, acceleration.y);
            this.maxSpeed = config.maxSpeed || NaN;
        } else
            this.acceleration = new PIXI.Point();
        //set up the scale
        if (config.scale) {
            this.startScale = PropertyNode_1.default.createList(config.scale);
            this.minimumScaleMultiplier = config.scale.minimumScaleMultiplier || 1;
        } else {
            this.startScale = new PropertyNode_1.default(1, 0);
            this.minimumScaleMultiplier = 1;
        }
        //set up the color
        if (config.color) {
            this.startColor = PropertyNode_1.default.createList(config.color);
        } else {
            this.startColor = new PropertyNode_1.default({
                r: 0xFF,
                g: 0xFF,
                b: 0xFF
            }, 0);
        }
        //set up the start rotation
        if (config.startRotation) {
            this.minStartRotation = config.startRotation.min;
            this.maxStartRotation = config.startRotation.max;
        } else
            this.minStartRotation = this.maxStartRotation = 0;
        if (config.noRotation &&
            (this.minStartRotation || this.maxStartRotation)) {
            this.noRotation = !!config.noRotation;
        } else
            this.noRotation = false;
        //set up the rotation speed
        if (config.rotationSpeed) {
            this.minRotationSpeed = config.rotationSpeed.min;
            this.maxRotationSpeed = config.rotationSpeed.max;
        } else
            this.minRotationSpeed = this.maxRotationSpeed = 0;
        //set up the lifetime
        this.minLifetime = config.lifetime.min;
        this.maxLifetime = config.lifetime.max;
        //get the blend mode
        this.particleBlendMode = ParticleUtils_1.default.getBlendMode(config.blendMode);
        //use the custom ease if provided
        if (config.ease) {
            this.customEase = typeof config.ease == "function" ?
                config.ease :
                ParticleUtils_1.default.generateEase(config.ease);
        } else
            this.customEase = null;
        //set up the extra data, running it through the particle class's parseData function.
        if (partClass.parseData)
            this.extraData = partClass.parseData(config.extraData);
        else
            this.extraData = config.extraData || null;
        //////////////////////////
        // Emitter Properties   //
        //////////////////////////
        //reset spawn type specific settings
        this.spawnRect = this.spawnCircle = null;
        this.particlesPerWave = 1;
        if (config.particlesPerWave && config.particlesPerWave > 1)
            this.particlesPerWave = config.particlesPerWave;
        this.particleSpacing = 0;
        this.angleStart = 0;
        var spawnCircle;
        //determine the spawn function to use
        switch (config.spawnType) {
            case "rect":
                this.spawnType = "rect";
                this._spawnFunc = this._spawnRect;
                var spawnRect = config.spawnRect;
                this.spawnRect = new PIXI.Rectangle(spawnRect.x, spawnRect.y, spawnRect.w, spawnRect.h);
                break;
            case "circle":
                this.spawnType = "circle";
                this._spawnFunc = this._spawnCircle;
                spawnCircle = config.spawnCircle;
                this.spawnCircle = new PIXI.Circle(spawnCircle.x, spawnCircle.y, spawnCircle.r);
                break;
            case "ring":
                this.spawnType = "ring";
                this._spawnFunc = this._spawnRing;
                spawnCircle = config.spawnCircle;
                this.spawnCircle = new PIXI.Circle(spawnCircle.x, spawnCircle.y, spawnCircle.r);
                this.spawnCircle.minRadius = spawnCircle.minR;
                break;
            case "burst":
                this.spawnType = "burst";
                this._spawnFunc = this._spawnBurst;
                this.particleSpacing = config.particleSpacing;
                this.angleStart = config.angleStart ? config.angleStart : 0;
                break;
            case "point":
                this.spawnType = "point";
                this._spawnFunc = this._spawnPoint;
                break;
            default:
                this.spawnType = "point";
                this._spawnFunc = this._spawnPoint;
                break;
        }
        //set the spawning frequency
        this.frequency = config.frequency;
        this.spawnChance = (typeof config.spawnChance === 'number' && config.spawnChance > 0) ? config.spawnChance : 1;
        //set the emitter lifetime
        this.emitterLifetime = config.emitterLifetime || -1;
        //set the max particles
        this.maxParticles = config.maxParticles > 0 ? config.maxParticles : 1000;
        //determine if we should add the particle at the back of the list or not
        this.addAtBack = !!config.addAtBack;
        //reset the emitter position and rotation variables
        this.rotation = 0;
        this.ownerPos = new PIXI.Point();
        this.spawnPos = new PIXI.Point(config.pos.x, config.pos.y);
        this._prevEmitterPos = this.spawnPos.clone();
        //previous emitter position is invalid and should not be used for interpolation
        this._prevPosIsValid = false;
        //start emitting
        this._spawnTimer = 0;
        this.emit = config.emit === undefined ? true : !!config.emit;
        this.autoUpdate = config.autoUpdate === undefined ? false : !!config.autoUpdate;
    };
    /**
     * Recycles an individual particle.
     * @method PIXI.particles.Emitter#recycle
     * @param {Particle} particle The particle to recycle.
     * @private
     */
    Emitter.prototype.recycle = function(particle) {
        if (particle.next)
            particle.next.prev = particle.prev;
        if (particle.prev)
            particle.prev.next = particle.next;
        if (particle == this._activeParticlesLast)
            this._activeParticlesLast = particle.prev;
        if (particle == this._activeParticlesFirst)
            this._activeParticlesFirst = particle.next;
        //add to pool
        particle.prev = null;
        particle.next = this._poolFirst;
        this._poolFirst = particle;
        //remove child from display, or make it invisible if it is in a ParticleContainer
        if (particle.parent)
            particle.parent.removeChild(particle);
        //decrease count
        --this.particleCount;
    };
    /**
     * Sets the rotation of the emitter to a new value.
     * @method PIXI.particles.Emitter#rotate
     * @param {Number} newRot The new rotation, in degrees.
     */
    Emitter.prototype.rotate = function(newRot) {
        if (this.rotation == newRot)
            return;
        //caclulate the difference in rotation for rotating spawnPos
        var diff = newRot - this.rotation;
        this.rotation = newRot;
        //rotate spawnPos
        ParticleUtils_1.default.rotatePoint(diff, this.spawnPos);
        //mark the position as having changed
        this._posChanged = true;
    };
    /**
     * Changes the spawn position of the emitter.
     * @method PIXI.particles.Emitter#updateSpawnPos
     * @param {Number} x The new x value of the spawn position for the emitter.
     * @param {Number} y The new y value of the spawn position for the emitter.
     */
    Emitter.prototype.updateSpawnPos = function(x, y) {
        this._posChanged = true;
        this.spawnPos.x = x;
        this.spawnPos.y = y;
    };
    /**
     * Changes the position of the emitter's owner. You should call this if you are adding
     * particles to the world container that your emitter's owner is moving around in.
     * @method PIXI.particles.Emitter#updateOwnerPos
     * @param {Number} x The new x value of the emitter's owner.
     * @param {Number} y The new y value of the emitter's owner.
     */
    Emitter.prototype.updateOwnerPos = function(x, y) {
        this._posChanged = true;
        this.ownerPos.x = x;
        this.ownerPos.y = y;
    };
    /**
     * Prevents emitter position interpolation in the next update.
     * This should be used if you made a major position change of your emitter's owner
     * that was not normal movement.
     * @method PIXI.particles.Emitter#resetPositionTracking
     */
    Emitter.prototype.resetPositionTracking = function() {
        this._prevPosIsValid = false;
    };
    Object.defineProperty(Emitter.prototype, "emit", {
        /**
         * If particles should be emitted during update() calls. Setting this to false
         * stops new particles from being created, but allows existing ones to die out.
         * @member {Boolean} PIXI.particles.Emitter#emit
         */
        get: function() {
            return this._emit;
        },
        set: function(value) {
            this._emit = !!value;
            this._emitterLife = this.emitterLifetime;
        },
        enumerable: true,
        configurable: true
    });;
    Object.defineProperty(Emitter.prototype, "autoUpdate", {
        /**
         * If the update function is called automatically from the shared ticker.
         * Setting this to false requires calling the update function manually.
         * @member {Boolean} PIXI.particles.Emitter#autoUpdate
         */
        get: function() {
            return this._autoUpdate;
        },
        set: function(value) {
            if (this._autoUpdate && !value) {
                ticker.remove(this.update, this);
            } else if (!this._autoUpdate && value) {
                ticker.add(this.update, this);
            }
            this._autoUpdate = !!value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Starts emitting particles, sets autoUpdate to true, and sets up the Emitter to destroy itself
     * when particle emission is complete.
     * @method PIXI.particles.Emitter#playOnceAndDestroy
     * @param {Function} [callback] Callback for when emission is complete (all particles have died off)
     */
    Emitter.prototype.playOnceAndDestroy = function(callback) {
        this.autoUpdate = true;
        this.emit = true;
        this._destroyWhenComplete = true;
        this._completeCallback = callback;
    };
    /**
     * Starts emitting particles and optionally calls a callback when particle emission is complete.
     * @method PIXI.particles.Emitter#playOnce
     * @param {Function} [callback] Callback for when emission is complete (all particles have died off)
     */
    Emitter.prototype.playOnce = function(callback) {
        this.emit = true;
        this._completeCallback = callback;
    };
    /**
     * Updates all particles spawned by this emitter and emits new ones.
     * @method PIXI.particles.Emitter#update
     * @param {Number} delta Time elapsed since the previous frame, in __seconds__.
     */
    Emitter.prototype.update = function(delta) {
        if (this._autoUpdate) {
            delta = delta / PIXI.settings.TARGET_FPMS / 1000;
        }
        //if we don't have a parent to add particles to, then don't do anything.
        //this also works as a isDestroyed check
        if (!this._parent)
            return;
        //update existing particles
        var i, particle, next;
        for (particle = this._activeParticlesFirst; particle; particle = next) {
            next = particle.next;
            particle.update(delta);
        }
        var prevX, prevY;
        //if the previous position is valid, store these for later interpolation
        if (this._prevPosIsValid) {
            prevX = this._prevEmitterPos.x;
            prevY = this._prevEmitterPos.y;
        }
        //store current position of the emitter as local variables
        var curX = this.ownerPos.x + this.spawnPos.x;
        var curY = this.ownerPos.y + this.spawnPos.y;
        //spawn new particles
        if (this._emit) {
            //decrease spawn timer
            this._spawnTimer -= delta;
            //while _spawnTimer < 0, we have particles to spawn
            while (this._spawnTimer <= 0) {
                //determine if the emitter should stop spawning
                if (this._emitterLife > 0) {
                    this._emitterLife -= this._frequency;
                    if (this._emitterLife <= 0) {
                        this._spawnTimer = 0;
                        this._emitterLife = 0;
                        this.emit = false;
                        break;
                    }
                }
                //determine if we have hit the particle limit
                if (this.particleCount >= this.maxParticles) {
                    this._spawnTimer += this._frequency;
                    continue;
                }
                //determine the particle lifetime
                var lifetime = void 0;
                if (this.minLifetime == this.maxLifetime)
                    lifetime = this.minLifetime;
                else
                    lifetime = Math.random() * (this.maxLifetime - this.minLifetime) + this.minLifetime;
                //only make the particle if it wouldn't immediately destroy itself
                if (-this._spawnTimer < lifetime) {
                    //If the position has changed and this isn't the first spawn,
                    //interpolate the spawn position
                    var emitPosX = void 0,
                        emitPosY = void 0;
                    if (this._prevPosIsValid && this._posChanged) {
                        //1 - _spawnTimer / delta, but _spawnTimer is negative
                        var lerp = 1 + this._spawnTimer / delta;
                        emitPosX = (curX - prevX) * lerp + prevX;
                        emitPosY = (curY - prevY) * lerp + prevY;
                    } else {
                        emitPosX = curX;
                        emitPosY = curY;
                    }
                    //create enough particles to fill the wave (non-burst types have a wave of 1)
                    i = 0;
                    for (var len = Math.min(this.particlesPerWave, this.maxParticles - this.particleCount); i < len; ++i) {
                        //see if we actually spawn one
                        if (this.spawnChance < 1 && Math.random() >= this.spawnChance)
                            continue;
                        //create particle
                        var p = void 0;
                        if (this._poolFirst) {
                            p = this._poolFirst;
                            this._poolFirst = this._poolFirst.next;
                            p.next = null;
                        } else {
                            p = new this.particleConstructor(this);
                        }
                        //set a random texture if we have more than one
                        if (this.particleImages.length > 1) {
                            p.applyArt(this.particleImages[Math.floor(Math.random() * this.particleImages.length)]);
                        } else {
                            //if they are actually the same texture, a standard particle
                            //will quit early from the texture setting in setTexture().
                            p.applyArt(this.particleImages[0]);
                        }
                        //set up the start and end values
                        p.alphaList.reset(this.startAlpha);
                        if (this.minimumSpeedMultiplier != 1) {
                            p.speedMultiplier = Math.random() * (1 - this.minimumSpeedMultiplier) + this.minimumSpeedMultiplier;
                        }
                        p.speedList.reset(this.startSpeed);
                        p.acceleration.x = this.acceleration.x;
                        p.acceleration.y = this.acceleration.y;
                        p.maxSpeed = this.maxSpeed;
                        if (this.minimumScaleMultiplier != 1) {
                            p.scaleMultiplier = Math.random() * (1 - this.minimumScaleMultiplier) + this.minimumScaleMultiplier;
                        }
                        p.scaleList.reset(this.startScale);
                        p.colorList.reset(this.startColor);
                        //randomize the rotation speed
                        if (this.minRotationSpeed == this.maxRotationSpeed)
                            p.rotationSpeed = this.minRotationSpeed;
                        else
                            p.rotationSpeed = Math.random() * (this.maxRotationSpeed - this.minRotationSpeed) + this.minRotationSpeed;
                        p.noRotation = this.noRotation;
                        //set up the lifetime
                        p.maxLife = lifetime;
                        //set the blend mode
                        p.blendMode = this.particleBlendMode;
                        //set the custom ease, if any
                        p.ease = this.customEase;
                        //set the extra data, if any
                        p.extraData = this.extraData;
                        //call the proper function to handle rotation and position of particle
                        this._spawnFunc(p, emitPosX, emitPosY, i);
                        //initialize particle
                        p.init();
                        //update the particle by the time passed, so the particles are spread out properly
                        p.update(-this._spawnTimer); //we want a positive delta, because a negative delta messes things up
                        //add the particle to the display list
                        if (!p.parent) {
                            if (this.addAtBack)
                                this._parent.addChildAt(p, 0);
                            else
                                this._parent.addChild(p);
                        } else {
                            //kind of hacky, but performance friendly
                            //shuffle children to correct place
                            var children = this._parent.children;
                            //avoid using splice if possible
                            if (children[0] == p)
                                children.shift();
                            else if (children[children.length - 1] == p)
                                children.pop();
                            else {
                                var index = children.indexOf(p);
                                children.splice(index, 1);
                            }
                            if (this.addAtBack)
                                children.unshift(p);
                            else
                                children.push(p);
                        }
                        //add particle to list of active particles
                        if (this._activeParticlesLast) {
                            this._activeParticlesLast.next = p;
                            p.prev = this._activeParticlesLast;
                            this._activeParticlesLast = p;
                        } else {
                            this._activeParticlesLast = this._activeParticlesFirst = p;
                        }
                        ++this.particleCount;
                    }
                }
                //increase timer and continue on to any other particles that need to be created
                this._spawnTimer += this._frequency;
            }
        }
        //if the position changed before this update, then keep track of that
        if (this._posChanged) {
            this._prevEmitterPos.x = curX;
            this._prevEmitterPos.y = curY;
            this._prevPosIsValid = true;
            this._posChanged = false;
        }
        //if we are all done and should destroy ourselves, take care of that
        if (!this._emit && !this._activeParticlesFirst) {
            if (this._completeCallback) {
                this._completeCallback();
            }
            if (this._destroyWhenComplete) {
                this.destroy();
            }
        }
    };
    /**
     * Positions a particle for a point type emitter.
     * @method PIXI.particles.Emitter#_spawnPoint
     * @private
     * @param {Particle} p The particle to position and rotate.
     * @param {Number} emitPosX The emitter's x position
     * @param {Number} emitPosY The emitter's y position
     * @param {int} i The particle number in the current wave. Not used for this function.
     */
    Emitter.prototype._spawnPoint = function(p, emitPosX, emitPosY) {
        //set the initial rotation/direction of the particle based on
        //starting particle angle and rotation of emitter
        if (this.minStartRotation == this.maxStartRotation)
            p.rotation = this.minStartRotation + this.rotation;
        else
            p.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation;
        //drop the particle at the emitter's position
        p.position.x = emitPosX;
        p.position.y = emitPosY;
    };
    /**
     * Positions a particle for a rectangle type emitter.
     * @method PIXI.particles.Emitter#_spawnRect
     * @private
     * @param {Particle} p The particle to position and rotate.
     * @param {Number} emitPosX The emitter's x position
     * @param {Number} emitPosY The emitter's y position
     * @param {int} i The particle number in the current wave. Not used for this function.
     */
    Emitter.prototype._spawnRect = function(p, emitPosX, emitPosY) {
        //set the initial rotation/direction of the particle based on starting
        //particle angle and rotation of emitter
        if (this.minStartRotation == this.maxStartRotation)
            p.rotation = this.minStartRotation + this.rotation;
        else
            p.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation;
        //place the particle at a random point in the rectangle
        helperPoint.x = Math.random() * this.spawnRect.width + this.spawnRect.x;
        helperPoint.y = Math.random() * this.spawnRect.height + this.spawnRect.y;
        if (this.rotation !== 0)
            ParticleUtils_1.default.rotatePoint(this.rotation, helperPoint);
        p.position.x = emitPosX + helperPoint.x;
        p.position.y = emitPosY + helperPoint.y;
    };
    /**
     * Positions a particle for a circle type emitter.
     * @method PIXI.particles.Emitter#_spawnCircle
     * @private
     * @param {Particle} p The particle to position and rotate.
     * @param {Number} emitPosX The emitter's x position
     * @param {Number} emitPosY The emitter's y position
     * @param {int} i The particle number in the current wave. Not used for this function.
     */
    Emitter.prototype._spawnCircle = function(p, emitPosX, emitPosY) {
        //set the initial rotation/direction of the particle based on starting
        //particle angle and rotation of emitter
        if (this.minStartRotation == this.maxStartRotation)
            p.rotation = this.minStartRotation + this.rotation;
        else
            p.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) +
            this.minStartRotation + this.rotation;
        //place the particle at a random radius in the circle
        helperPoint.x = Math.random() * this.spawnCircle.radius;
        helperPoint.y = 0;
        //rotate the point to a random angle in the circle
        ParticleUtils_1.default.rotatePoint(Math.random() * 360, helperPoint);
        //offset by the circle's center
        helperPoint.x += this.spawnCircle.x;
        helperPoint.y += this.spawnCircle.y;
        //rotate the point by the emitter's rotation
        if (this.rotation !== 0)
            ParticleUtils_1.default.rotatePoint(this.rotation, helperPoint);
        //set the position, offset by the emitter's position
        p.position.x = emitPosX + helperPoint.x;
        p.position.y = emitPosY + helperPoint.y;
    };
    /**
     * Positions a particle for a ring type emitter.
     * @method PIXI.particles.Emitter#_spawnRing
     * @private
     * @param {Particle} p The particle to position and rotate.
     * @param {Number} emitPosX The emitter's x position
     * @param {Number} emitPosY The emitter's y position
     * @param {int} i The particle number in the current wave. Not used for this function.
     */
    Emitter.prototype._spawnRing = function(p, emitPosX, emitPosY) {
        var spawnCircle = this.spawnCircle;
        //set the initial rotation/direction of the particle based on starting
        //particle angle and rotation of emitter
        if (this.minStartRotation == this.maxStartRotation)
            p.rotation = this.minStartRotation + this.rotation;
        else
            p.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) +
            this.minStartRotation + this.rotation;
        //place the particle at a random radius in the ring
        if (spawnCircle.minRadius == spawnCircle.radius) {
            helperPoint.x = Math.random() * (spawnCircle.radius - spawnCircle.minRadius) +
                spawnCircle.minRadius;
        } else
            helperPoint.x = spawnCircle.radius;
        helperPoint.y = 0;
        //rotate the point to a random angle in the circle
        var angle = Math.random() * 360;
        p.rotation += angle;
        ParticleUtils_1.default.rotatePoint(angle, helperPoint);
        //offset by the circle's center
        helperPoint.x += this.spawnCircle.x;
        helperPoint.y += this.spawnCircle.y;
        //rotate the point by the emitter's rotation
        if (this.rotation !== 0)
            ParticleUtils_1.default.rotatePoint(this.rotation, helperPoint);
        //set the position, offset by the emitter's position
        p.position.x = emitPosX + helperPoint.x;
        p.position.y = emitPosY + helperPoint.y;
    };
    /**
     * Positions a particle for a burst type emitter.
     * @method PIXI.particles.Emitter#_spawnBurst
     * @private
     * @param {Particle} p The particle to position and rotate.
     * @param {Number} emitPosX The emitter's x position
     * @param {Number} emitPosY The emitter's y position
     * @param {int} i The particle number in the current wave.
     */
    Emitter.prototype._spawnBurst = function(p, emitPosX, emitPosY, i) {
        //set the initial rotation/direction of the particle based on spawn
        //angle and rotation of emitter
        if (this.particleSpacing === 0)
            p.rotation = Math.random() * 360;
        else
            p.rotation = this.angleStart + (this.particleSpacing * i) + this.rotation;
        //drop the particle at the emitter's position
        p.position.x = emitPosX;
        p.position.y = emitPosY;
    };
    /**
     * Kills all active particles immediately.
     * @method PIXI.particles.Emitter#cleanup
     */
    Emitter.prototype.cleanup = function() {
        var particle, next;
        for (particle = this._activeParticlesFirst; particle; particle = next) {
            next = particle.next;
            this.recycle(particle);
            if (particle.parent)
                particle.parent.removeChild(particle);
        }
        this._activeParticlesFirst = this._activeParticlesLast = null;
        this.particleCount = 0;
    };
    /**
     * Destroys the emitter and all of its particles.
     * @method PIXI.particles.Emitter#destroy
     */
    Emitter.prototype.destroy = function() {
        //make sure we aren't still listening to any tickers
        this.autoUpdate = false;
        //puts all active particles in the pool, and removes them from the particle parent
        this.cleanup();
        //wipe the pool clean
        var next;
        for (var particle = this._poolFirst; particle; particle = next) {
            //store next value so we don't lose it in our destroy call
            next = particle.next;
            particle.destroy();
        }
        this._poolFirst = this._parent = this.particleImages = this.spawnPos = this.ownerPos =
            this.startColor = this.startScale = this.startAlpha = this.startSpeed =
            this.customEase = this._completeCallback = null;
    };
    return Emitter;
}());
exports.default = Emitter;