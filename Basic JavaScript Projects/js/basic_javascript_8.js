


function Time_function() { //time function and local variable 
    var Time = new Date() .getHours();
    var Reply;

    if (Time <12 == Time > 0) {    //here is the "if" statment
        Reply = "It is morning time!";
    }
    else if (Time >12 == Time <18) {
        Reply = "It is afternoon."
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //
}

var soda = "Pepsi"; //global variable
myFunction();

function myFunction() {
  document.getElementById("pop").innerHTML = "I enjoy  " + soda;
}