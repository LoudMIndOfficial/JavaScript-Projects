window.alert("Welcome to my Page") //Window alert

document.write("Please Sign Up") //just writing on the page

function msg(){ //button with new alert window
    alert("Hello Golf Buddies")
}

function first() { //Button with font color change
    var str = "Hello World!";
    var result = str.fontcolor("purple");
    document.getElementById("demo").innerHTML = result;
  }


function hero() { //Button Switches names ...expression
    var str = document.getElementById("cat").innerHTML; 
    var txt = str.replace("Spiderman","Batman");
    document.getElementById("cat").innerHTML = txt;
  }