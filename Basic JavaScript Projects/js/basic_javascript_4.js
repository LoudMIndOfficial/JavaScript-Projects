
function myfunction() { //onclick uses myfunction
    var sentence = "I am learning";//displays this and the next line 
    sentence +="a lot from this book!";
    document.getElementById("concatenate").innerHTML = sentence;//the id is concatenate
  }

  function getRndInteger(min, max) {   //random number 0-100
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function modulus_Operator() {
    var simple_Math = 25%6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math; //remainder of value
  }

  function negation_Operator() { //get a negative value
    var x = 10;
    document.getElementById("Math1").innerHTML = -x;
  }

  function decrement() { //reduce number value
    var x = 10.75;
    x--;
    document.write(x);
  }

  function increment1() {//increase number value
    var x = 12.75;
    x++;
    document.write(x);
  }

  function multiplication() { //mulitplication
    var simple_Math = 6 * 9;
    document.getElementById("Math5").innerHTML = " 6 x 9 =" + simple_Math;
  }

  function division() { //divide
    var simple_Math = 81 / 9;
    document.getElementById("Math8").innerHTML = " 81 / 9 =" + simple_Math;
  }

  function add() {  //addition
    var simple_Math = 6 + 9;
    document.getElementById("Math6").innerHTML = " 6 + 9 =" + simple_Math;
  }

  function subtract() { //subtraction
    var simple_Math = 66 - 19;
    document.getElementById("Math7").innerHTML = " 66 - 19 =" + simple_Math;
  }