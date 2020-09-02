function drink_function() {
    var age, Can_drink;
    age = document.getElementById("age").value;
    Can_drink = (age < 21) ? "You are not old enough":"You are old enough";
    document.getElementById("drink").innerHTML = Can_drink + " to drink beer.";
 
}

function count_Function() { //nested function example
    document.getElementById("counting").innerHTML = Count();
    function Count() {
        var Starting_point = 13;
        function Plus_eight() {Starting_point +=8;}
        Plus_eight();
        return Starting_point;
    }
}

function User(first, last) {
    this.firstName = first
    this.lastName = last
  }

  var user1 = new User("Jon", "Snow");
  var user2 = new User("Ned", "Stark");
    
    function function7() {
    document.getElementById("demo").innerHTML = "Jon is not " + user2.firstName;
    }