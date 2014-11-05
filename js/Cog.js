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
            this.angleDriver = null;
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
            this.angleDriver = angleDriver;
        };

        Cog.prototype.getAngleDriver = function () {
            return this.angleDriver;
        };

        Cog.prototype.getAngle = function () {
            return this.angleDriver === null ? 0 : this.angleDriver.getAngle();
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