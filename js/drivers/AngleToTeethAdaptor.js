CogWorld.Drivers.AngleToTeethAdaptor = (function () {
    'use strict';

    function AngleToTeethAdaptor(otherAngleDriver, teethOnCog) {
        this.otherAngleDriver = otherAngleDriver;
        this.teeth = teethOnCog;
    };

    AngleToTeethAdaptor.prototype.getTeeth = function () {
        return this.teeth * this.otherAngleDriver.getAngle() / (2*Math.PI);
    };

    return AngleToTeethAdaptor;
}());