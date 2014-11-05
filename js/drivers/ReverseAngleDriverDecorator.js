CogWorld.Drivers.ReverseAngleDriverDecorator = (function () {
    'use strict';

    function ReverseAngleDriverDecorator(otherAngleDriver) {
        this.otherAngleDriver = otherAngleDriver;
    };

    ReverseAngleDriverDecorator.prototype.getAngle = function () {
        return -this.otherAngleDriver.getAngle();
    };

    return ReverseAngleDriverDecorator;
}());