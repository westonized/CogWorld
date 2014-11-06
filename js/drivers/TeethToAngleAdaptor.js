CogWorld.Drivers.TeethToAngleAdaptor = (function () {
    'use strict';

    function TeethToAngleAdaptor(teethDriver, teethOnCog) {
        this.teethDriver = teethDriver;
        this.teeth = teethOnCog;
    };

    TeethToAngleAdaptor.prototype.getAngle = function () {
        return (2*Math.PI) * this.teethDriver.getTeeth() / this.teeth;
    };

    return TeethToAngleAdaptor;
}());