// Challenge 1

var numOfSandwhiches = 4 * 2;

console.log("numOfSandwiches", numOfSandwhiches);

var cat = "fluffly"

console.log(cat.length);

var name = "batman"


// Challenge 2
var string = "Hello " + name + " how are you doing today.";
console.log("string", string);

var DNA = "GCATCATTACGTC";
var RNA = DNA.replace(/T/g, 'U');
console.log("RNA:", RNA);

var animal = "ALLIGator";

if(animal.toLowerCase() === "alligator"){
    // debugger;
    console.log("animal: ", "wide");
} else {
    console.log("small");
}

if(animal.toLowerCase() === "alligator"){
    console.log("animal: ", "wide");
}

var yarn = "the better string";
var domString = "<h4>" + yarn + "</h4>"
var myDiv = document.getElementById("yarn-holder");
myDiv.innerHTML = domString;