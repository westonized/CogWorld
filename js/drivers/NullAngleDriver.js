CogWorld.Drivers.NullAngleDriver = (function () {
    'use strict';

    function NullAngleDriver() {
    };

    NullAngleDriver.prototype.getAngle = function () {
        return 0;
    };

    return NullAngleDriver;
}());