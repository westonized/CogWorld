CogWorld.World = (function () {
    'use strict';

    function World() {
        this.clock = new CogWorld.Drivers.ClockAngleDriver();
        this.cogs = [];
    };

    World.prototype.add = function (cog) {
        console.log("new Cog " + cog);
        var lastCog = this.getLastCog();
        if (lastCog === null) {
            cog.setAngleDriver(this.clock);
        }
        else {
            this.attachCog(cog);
        }
        this.cogs.push(cog);
    };

    var attachCogTo = function (destinationCog, sourceCog) {
        if (destinationCog === null) {
            sourceCog.setAngleDriver(null);
            return;
        }
        var teeth = new CogWorld.Drivers.AngleToTeethAdaptor(destinationCog.getAngleDriver(), destinationCog.getTeeth());
        teeth = new CogWorld.Drivers.HalfToothDecorator(teeth);
        var driver = new CogWorld.Drivers.TeethToAngleAdaptor(teeth, sourceCog.getTeeth());
        var reversed = new CogWorld.Drivers.ReverseAngleDriverDecorator(driver);
        sourceCog.setAngleDriver(reversed);
    };

    World.prototype.attachCog = function (cog) {
        var targetCog = this.findCogNear(cog);
        attachCogTo(targetCog, cog);
    };

    World.prototype.getLastCog = function () {
        var length = this.cogs.length;
        if (length == 0)return null;
        return this.cogs[length - 1];
    };

    World.prototype.setTime = function (timestamp) {
        this.clock.setTime(timestamp);
    };

    World.prototype.findCogNear = function (cog) {
        var length = this.cogs.length;
        for (var i = 0; i < length; i++) {
            var other = this.cogs[i];
            if (cog === other)
                continue;
            if (cog.inRange(other))
                return other;
        }
        return null;
    };

    return World;
}());