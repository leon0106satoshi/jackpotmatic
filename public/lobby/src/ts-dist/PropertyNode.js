"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var ParticleUtils_1 = require("./ParticleUtils");
/**
 * A single node in a PropertyList.
 * @memberof PIXI.particles
 * @class PropertyNode
 * @constructor
 * @param {number|string} value The value for this node
 * @param {number} time The time for this node, between 0-1
 * @param {Function|Array} [ease] Custom ease for this list. Only relevant for the first node.
 */
var PropertyNode = /** @class */ (function() {
    function PropertyNode(value, time, ease) {
        this.value = typeof value == "string" ? ParticleUtils_1.default.hexToRGB(value) : value;
        this.time = time;
        this.next = null;
        this.isStepped = false;
        if (ease) {
            this.ease = typeof ease == "function" ? ease : ParticleUtils_1.default.generateEase(ease);
        } else {
            this.ease = null;
        }
    }
    /**
     * Creates a list of property values from a data object {list, isStepped} with a list of objects in
     * the form {value, time}. Alternatively, the data object can be in the deprecated form of
     * {start, end}.
     * @method PIXI.particles.PropertyNode.createListFromArray
     * @static
     * @param  {Object} data The data for the list.
     * @param  {Array} data.list The array of value and time objects.
     * @param  {boolean} [data.isStepped] If the list is stepped rather than interpolated.
     * @param  {Function|Array} [data.ease] Custom ease for this list.
     * @return {PIXI.particles.PropertyNode} The first node in the list
     */
    PropertyNode.createList = function(data) {
        if (Array.isArray(data.list)) {
            var array = data.list;
            var node = void 0,
                first = void 0;
            first = node = new PropertyNode(array[0].value, array[0].time, data.ease);
            //only set up subsequent nodes if there are a bunch or the 2nd one is different from the first
            if (array.length > 2 || (array.length === 2 && array[1].value !== array[0].value)) {
                for (var i = 1; i < array.length; ++i) {
                    node.next = new PropertyNode(array[i].value, array[i].time);
                    node = node.next;
                }
            }
            first.isStepped = !!data.isStepped;
            return first;
        } else {
            //Handle deprecated version here
            var start = new PropertyNode(data.start, 0);
            //only set up a next value if it is different from the starting value
            if (data.end !== data.start)
                start.next = new PropertyNode(data.end, 1);
            return start;
        }
    };
    return PropertyNode;
}());
exports.default = PropertyNode;