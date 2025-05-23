// Method One
// Create Your Object Here
let objMethodOne ={
    property: "Method One",
}

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo ={
    property: "Method Two",
    method: function(){
        return this.property;
    }
}

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = new Object({
    property: "Method Three",
})



console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.create({});

objMethodFour.property = "Method Four";

console.log(objMethodFour.property); // "Method Four"