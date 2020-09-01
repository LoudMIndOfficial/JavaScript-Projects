 //true statement
    document.write(15 > 9);

    function myfunction() {
        var str1 = "How many cats? - ";
        var str2 = "577";
        var res = str1.concat(str2);
        document.getElementById("demo").innerHTML = res;
      }


  function myfunction1() { //False statement 
    document.getElementById("demo1").innerHTML = 15 < 9;
  }

console.log( 8 + 2); //10 displayed in the console log

function myfunction3() { //Example of Coercion
    document.getElementById("demo3").innerHTML = "15" + 9;
  }

  console.log( 16 < 2); // false displayed in console log

  function myfunction4() { //Example of equality true
    document.getElementById("demo4").innerHTML = 10 == 10;
  }

  function myfunction5() { //Example of equality false
    document.getElementById("demo5").innerHTML = 5 == 10;
  }

  function myfunction6() { //Example of comparison both value and type (false)
    x = 24
    y = 26
    document.getElementById("demo6").innerHTML = x === y;
  }

  function myfunction7() { //Example of comparison both value and type (true)
    x = "Car"
    y = "Car"
    document.getElementById("demo7").innerHTML = x === y;
  }

  function myfunction8() { //Example of comparison both value and type (false) different type
    x = 10
    y = "10"
    document.getElementById("demo8").innerHTML = x === y;
  }

  function myfunction9() { //Example of comparison both value and type (false) different type and value
    x = "car"
    y = 8
    document.getElementById("demo9").innerHTML = x === y;
  }

  function myfunction10() { //Boolean Logic && both must be true to return true
   
    document.getElementById("demo10").innerHTML = 5>2 && 10>4;
  }

  function myfunction11() { //Boolean Logic || One OR the other to be true
   
    document.getElementById("demo11").innerHTML = 5>19 || 10>4;
  }

  function not_function() { //Boolean Logic if false returns true answer
    document.getElementById("not").innerHTML = !(20>10);
  }

  function not_function1() { //Boolean Logic if false returns true answer
    document.getElementById("not1").innerHTML = !(20<10);
  }