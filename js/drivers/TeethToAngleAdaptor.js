CogWorld.Drivers.TeethToAngleAdaptor = (function () {
    'use strict';

    function TeethToAngleAdaptor(teethDriver, cog) {
        this.teethDriver = teethDriver;
        this.teeth = cog.getTeeth();
    };

    TeethToAngleAdaptor.prototype.getAngle = function () {
        return (2*Math.PI) * this.teethDriver.getTeeth() / this.teeth;
    };

    return TeethToAngleAdaptor;
}());