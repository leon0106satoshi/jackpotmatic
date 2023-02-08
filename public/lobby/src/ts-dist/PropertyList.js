"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var ParticleUtils_1 = require("./ParticleUtils");
/**
 * Singly linked list container for keeping track of interpolated properties for particles.
 * Each Particle will have one of these for each interpolated property.
 * @memberof PIXI.particles
 * @class PropertyList
 * @constructor
 * @param {boolean} isColor If this list handles color values
 */
var PropertyList = /** @class */ (function() {
    function PropertyList(isColor) {
        if (isColor === void 0) {
            isColor = false;
        }
        this.current = null;
        this.next = null;
        this.isColor = !!isColor;
        this.interpolate = null;
        this.ease = null;
    }
    /**
     * Resets the list for use.
     * @method interpolate
     * @param {PIXI.particles.PropertyNode} first The first node in the list.
     * @param {boolean} [isStepped=false] If the values should be stepped instead of interpolated linearly.
     */
    PropertyList.prototype.reset = function(first) {
        this.current = first;
        this.next = first.next;
        var isSimple = this.next && this.next.time >= 1;
        if (isSimple) {
            this.interpolate = this.isColor ? intColorSimple : intValueSimple;
        } else if (first.isStepped) {
            this.interpolate = this.isColor ? intColorStepped : intValueStepped;
        } else {
            this.interpolate = this.isColor ? intColorComplex : intValueComplex;
        }
        this.ease = this.current.ease;
    };
    return PropertyList;
}());
exports.default = PropertyList;

function intValueSimple(lerp) {
    if (this.ease)
        lerp = this.ease(lerp);
    return (this.next.value - this.current.value) * lerp + this.current.value;
}

function intColorSimple(lerp) {
    if (this.ease)
        lerp = this.ease(lerp);
    var curVal = this.current.value,
        nextVal = this.next.value;
    var r = (nextVal.r - curVal.r) * lerp + curVal.r;
    var g = (nextVal.g - curVal.g) * lerp + curVal.g;
    var b = (nextVal.b - curVal.b) * lerp + curVal.b;
    return ParticleUtils_1.default.combineRGBComponents(r, g, b);
}

function intValueComplex(lerp) {
    if (this.ease)
        lerp = this.ease(lerp);
    //make sure we are on the right segment
    while (lerp > this.next.time) {
        this.current = this.next;
        this.next = this.next.next;
    }
    //convert the lerp value to the segment range
    lerp = (lerp - this.current.time) / (this.next.time - this.current.time);
    return (this.next.value - this.current.value) * lerp + this.current.value;
}

function intColorComplex(lerp) {
    if (this.ease)
        lerp = this.ease(lerp);
    //make sure we are on the right segment
    while (lerp > this.next.time) {
        this.current = this.next;
        this.next = this.next.next;
    }
    //convert the lerp value to the segment range
    lerp = (lerp - this.current.time) / (this.next.time - this.current.time);
    var curVal = this.current.value,
        nextVal = this.next.value;
    var r = (nextVal.r - curVal.r) * lerp + curVal.r;
    var g = (nextVal.g - curVal.g) * lerp + curVal.g;
    var b = (nextVal.b - curVal.b) * lerp + curVal.b;
    return ParticleUtils_1.default.combineRGBComponents(r, g, b);
}

function intValueStepped(lerp) {
    if (this.ease)
        lerp = this.ease(lerp);
    //make sure we are on the right segment
    while (this.next && lerp > this.next.time) {
        this.current = this.next;
        this.next = this.next.next;
    }
    return this.current.value;
}

function intColorStepped(lerp) {
    if (this.ease)
        lerp = this.ease(lerp);
    //make sure we are on the right segment
    while (this.next && lerp > this.next.time) {
        this.current = this.next;
        this.next = this.next.next;
    }
    var curVal = this.current.value;
    return ParticleUtils_1.default.combineRGBComponents(curVal.r, curVal.g, curVal.b);
}