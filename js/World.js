CogWorld.World = (function (){
    'use strict';

    function World(){

    };

    World.prototype.add = function(cog){
        console.log("new Cog " + cog);
    };

    return World;
}());