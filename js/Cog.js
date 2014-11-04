CogWorld.Cog = (function () {
    'use strict';

    function Cog(teath) {
        this.x = 0;
        this.y = 0;
        this.teath = teath;
        this.innerRing = teath;
        this.outerRing = this.innerRing + 5;
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

    return Cog;
}());