CogWorld.DrivenCogClock = (function () {
    'use strict';

    function DrivenCogClock() {
        this.time = 0;
    };

    DrivenCogClock.prototype.setTime = function (time) {
        this.time = time;
    };

    DrivenCogClock.prototype.getTeath = function () {
        return this.time/40;
    };

    return DrivenCogClock;
}());