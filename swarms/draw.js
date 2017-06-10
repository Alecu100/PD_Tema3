

var drawSwarm = {
    meta: {
        debug: false
    },
    vars: {
 
    },
    draw: function (coords) {
        this.coords = coords;
        console.log("coordonate",coords);
		this.swarm("checkUsers");
       
    },

    checkUsers: {
        node: "UsersManager",
        code: function () {

         console.log("checking users");


           this.swarmToUser(this.meta.userId,"newDrawingEvent",this.coords)

        }
    }

};

drawSwarm;