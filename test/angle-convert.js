var angle = require('..'),
    should = require('should');

describe('radToDeg(rad)', function () {
    it('should convert one radian into 180/π degrees', function () {
        angle.radToDeg(1).should.equal(180 / Math.PI);
    });
});

describe('degToRad(deg)', function () {
    it('should convert one degree to π/180 radians', function () {
        angle.degToRad(1).should.equal(Math.PI / 180);
    });
});

describe('Both methods chained', function () {
    it('should cancel each other', function () {
        var test = 360;
        angle.radToDeg(angle.degToRad(test)).should.equal(test);
    });
});
