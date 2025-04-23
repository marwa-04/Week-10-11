let one = document.querySelector("#elzero"); //using id
let two =  document.querySelector(".element"); //using class
let three = document.querySelector("[name = 'js'"); //using attribute
let four = document.querySelector("div"); //using tag 
let five = document.querySelectorAll("#elzero")[0]; //using id
let six = document.querySelectorAll(".element")[0]; //using class
let seven = document.querySelectorAll("[name = 'js']")[0]; //using attribute
let eight =  document.querySelectorAll("div")[0]; //using tag
let nine = document.getElenentById("elzero");
let ten =  document.getElementsByClassName("element")[0];
let eleven = document.getElementsByName("js")[0];
let twelve = document.getElementsByTagName("div")[0];
let thirteen = document.body.children[0]; //using body
let fourteen = document.body.firstElementChild;
let  fifteen= document.body.childrenNodes[1];


console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(seven);
console.log(eight);
console.log(nine);
console.log(ten);
console.log(eleven);
console.log(twelve);
console.log(thirteen);
console.log(fourteen);
console.log(fifteen);