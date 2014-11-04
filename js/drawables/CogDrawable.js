CogWorld.Drawables.CogDrawable = (function () {
    'use strict';

    var tau = 2 * Math.PI;

    function CogDrawable(cog) {
        this.cog = cog;
    };

    CogDrawable.prototype.draw = function (context) {
        context.save();
        context.translate(this.cog.getX(), this.cog.getY());

        context.strokeStyle = "#afafaf";

        context.beginPath();
        context.arc(0, 0, this.cog.innerRing, 0, tau);
        context.stroke();

        context.beginPath();
        context.arc(0, 0, this.cog.outerRing, 0, tau);
        context.stroke();

        context.strokeStyle = "red";
        context.fillStyle = "blue";

        context.beginPath();
        context.moveTo(0, this.cog.outerRing);
        for (var t = 0; t < this.cog.teath; t++) {
            var angle = (t + 0.5) * tau / this.cog.teath;
            context.lineTo(this.cog.innerRing * Math.sin(angle), this.cog.innerRing * Math.cos(angle));
            angle = (t + 1) * tau / this.cog.teath;
            context.lineTo(this.cog.outerRing * Math.sin(angle), this.cog.outerRing * Math.cos(angle));
        }
        context.arc(0, 0, this.cog.innerRing - 2, 0, tau);
        context.fill();

        context.beginPath();
        context.moveTo(0, this.cog.innerRing);
        context.lineTo(0, -this.cog.innerRing);
        context.moveTo(this.cog.innerRing, 0);
        context.lineTo(-this.cog.innerRing, 0);
        context.stroke();

        context.text()

        context.restore();
    };

    return CogDrawable;
}());