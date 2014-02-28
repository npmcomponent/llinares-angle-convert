var toRadians = Math.PI / 180,
    toDegrees = 180 / Math.PI;

/**
 * Convert degrees to radians.
 * @param {Number} deg
 * @return {Number}
 * @api public
 */
exports.degToRad = function (deg) {
    return deg * toRadians;
};

/**
 * Convert radians to degrees.
 * @param {Number} rad
 * @return {Number}
 * @api public
 */
exports.radToDeg = function (rad) {
    return rad * toDegrees;
};
