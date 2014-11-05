CogWorld.Drivers.ClockAngleDriver = (function () {
    'use strict';

    function ClockAngleDriver() {
        this.time = 0;
    };

    ClockAngleDriver.prototype.setTime = function (time) {
        this.time = time;
    };

    ClockAngleDriver.prototype.getAngle = function () {
        var rps = 4;
        return Math.PI * 2 * this.time / (rps * 1000);
    };

    return ClockAngleDriver;
}());