function globalContext(){
    var colt = {
        firstName: "Colt",
        sayHi: function(){
            setTimeout(function(){
                console.log("Hi " + this.firstName);
            }, 1000);
        }
    };
}

function bindWithObject(){
    var colt = {
        firstName: "Colt",
        sayHi: function(){
            setTimeout(function(){
                console.log("Hi " + this.firstName);
            }.bind(this), 1000);
        }
    };
}