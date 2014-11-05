CogWorld.Drivers.AngleToTeethAdaptor = (function () {
    'use strict';

    function AngleToTeethAdaptor(otherAngleDriver, cog) {
        this.otherAngleDriver = otherAngleDriver;
        this.teeth = cog.getTeeth();
    };

    AngleToTeethAdaptor.prototype.getTeeth = function () {
        return this.teeth * this.otherAngleDriver.getAngle() / (2*Math.PI);
    };

    return AngleToTeethAdaptor;
}());