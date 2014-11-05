CogWorld.Drivers.HalfToothDecorator = (function () {
    'use strict';

    function HalfToothDecorator(otherToothDriver) {
        this.otherToothDriver = otherToothDriver;
    };

    HalfToothDecorator.prototype.getTeeth = function () {
        return this.otherToothDriver.getTeeth() + 0.5;
    };

    return HalfToothDecorator;
}());