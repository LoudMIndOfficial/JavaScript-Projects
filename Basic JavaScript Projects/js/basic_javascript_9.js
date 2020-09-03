function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence";
    var whole_sentence = part_1.concat(part_2, part_3,part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section;
}

function upperCase() {
    var str = "Hello Mate!";
    var res = str.toUpperCase();
    document.getElementById("case").innerHTML = res
}

function search_method() { //searches teh string for a specified value
    var str = "Visit My Site!";
    var n = str.search("Site");
    document.getElementById("search1").innerHTML = n
}

function numstrg() { //number string
    var x = 88;
    document.getElementById("numstring").innerHTML = x.toString();
}

function precision_method() { //breaks down the number to the number you want 
    var x = 12569.258454848487;
    document.getElementById("Precision").innerHTML = x.toPrecision(7);
}

function fix() { //rounds numbers
    var num = 9.258454848487;
    var n = num.toFixed(2)
    document.getElementById("fixnum").innerHTML = n;
}

function demo1() { //takes it back to the primitive state
    var str = "Howdy";
    var res = str.valueOf()
    document.getElementById("function").innerHTML = res;
}