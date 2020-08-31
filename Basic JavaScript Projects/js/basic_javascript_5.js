function dictionary() { //KVP Keys 
    var car = {
        Make:"Dodge",
        Color:"Red", //<<<<<<same key 
        Type:"Viper",
        Year:2014,
        Color:"Black",//<<<same key 
    };
    delete car.Color;
    document.getElementById("dictionary").innerHTML = car.Color;
}