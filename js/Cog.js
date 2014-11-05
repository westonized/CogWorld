CogWorld.CogBuilder = (function () {

    function CogBuilder() {
        this._teath = 20;
    };

    var Cog = (function () {
        'use strict';

        function Cog(builder) {
            this.x = 0;
            this.y = 0;
            this.teath = builder._teath;
            this.innerRing = builder._teath;
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

        Cog.prototype.setAngleDriver = function (angleDriver) {
            this.angleDriver = angleDriver;
        };

        Cog.prototype.getAngle = function () {
            return this.angleDriver === null ? 0 : this.angleDriver.getAngle();
        };

        return Cog;
    }());

    CogBuilder.prototype.teath = function (teath) {
        this._teath = teath;
        return this;
    };

    CogBuilder.prototype.build = function () {
        return new Cog(this);
    };

    return CogBuilder;

}());