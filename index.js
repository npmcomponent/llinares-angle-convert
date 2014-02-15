var toRadians = Math.PI / 180,
    toDegrees = 180 / Math.PI;

module.exports.degToRad = function (deg) {
    return deg * toRadians;
};

module.exports.radToDeg = function (rad) {
    return rad * toDegrees;
};
