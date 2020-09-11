function number_string() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("demo").innerHTML = n; 
}

var Intruments = ["Guitar", "Drums", "Paino", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Intruments.length; Y++) {
        Content += Intruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function star_Value() {
    var star = [];
    star[0] = "small";
    star[1] = "meduim";
    star[2] = "large";
    star[3] = "x-large";
    document.getElementById("star").innerHTML = "That Star is:" + star[2] + ".";
 }

 function constant_function() {
     const automobile = {type:"Car", brand:"Ford", color:"red"} ;
     automobile.color = "purple";
     automobile.price = "$15000";
     document.getElementById("Constant").innerHTML = "The cost of the " + automobile.type + " was " + automobile.price;
 }
 function letfunction() {
        var  x = 89;
        // Here x is 89
        {  
        let x = 43;
        // Here x is 43
        }
        // Here x will be 89
        document.getElementById("demo1").innerHTML = x;
    }

function while1() {
    var i = 1;                  //set the counter to 1
    var msg = '';               //a message

    while (i < 10) {
        msg += i + ' x 5 =' + (i * 5) + '<br />';
        i++
    }
    document.getElementById("answer").innerHTML = msg;
}