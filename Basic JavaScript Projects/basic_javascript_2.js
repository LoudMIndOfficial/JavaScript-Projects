function example() { //Button Switches names ...expression
    var str = document.getElementById("cat").innerHTML; 
    var txt = str.replace("Yes","No");
    document.getElementById("cat").innerHTML = txt;
  }