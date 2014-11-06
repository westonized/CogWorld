CogWorld.CogBuilder = (function () {

    function CogBuilder() {
        this._teeth = 20;
    };

    var Cog = (function () {
        'use strict';

        function Cog(builder) {
            this.x = 0;
            this.y = 0;
            this.teeth = builder._teeth;
            this.innerRing = builder._teeth;
            this.outerRing = this.innerRing + 5;
            this.angleDriver = new CogWorld.Drivers.NullAngleDriver();
        };

        Cog.prototype.getX = function () {
            return this.x;
        };
        Cog.prototype.setX = function (x) {
            this.x = x;
        };

        Cog.prototype.getY = function () {
            return this.y;
        };

        Cog.prototype.setY = function (y) {
            this.y = y;
        };

        Cog.prototype.getTeeth = function () {
            return this.teeth;
        };

        Cog.prototype.getInnerRing = function () {
            return this.innerRing;
        };

        Cog.prototype.getOuterRing = function () {
            return this.outerRing;
        };

        Cog.prototype.setAngleDriver = function (angleDriver) {
            if (angleDriver === null)
                angleDriver = new CogWorld.Drivers.NullAngleDriver();
            this.angleDriver = angleDriver;
        };

        Cog.prototype.getAngleDriver = function () {
            return this.angleDriver;
        };

        Cog.prototype.getAngle = function () {
            return this.angleDriver.getAngle();
        };

        Cog.prototype.inRange = function (otherCog) {
            var dx = otherCog.getX() - this.getX();
            var dy = otherCog.getY() - this.getY();
            var dxdy2 = dx * dx + dy * dy;
            var fathest = otherCog.getOuterRing() + this.getOuterRing();
            var closest = otherCog.getInnerRing() + this.getOuterRing();
            return dxdy2 < fathest * fathest &&
                dxdy2 >= closest * closest;
        };


        return Cog;
    }());

    CogBuilder.prototype.teeth = function (teeth) {
        this._teeth = teeth;
        return this;
    };

    CogBuilder.prototype.build = function () {
        return new Cog(this);
    };

    return CogBuilder;

}());