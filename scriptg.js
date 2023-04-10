
'use strict';


var css = document.querySelector("h3");
var x = document.getElementsByClassName("color1")[0];
var y = document.getElementsByClassName("color2")[0];
var body = document.getElementById("one");
console.log(body);
console.log(x);
console.log(y);

function changefun() { 

    body.style.background = "Linear-gradient(to right, " + x.value + "," + y.value +")";
    // css.textContent = body.style.background + ";";
    css.innerHTML = "color1 = " + x.value + "<br>color2 = " + y.value;
}

// x.addEventListener("input", changefun());

// y.addEventListener("input", changefun());


// css.innerHTML = "color1 = " + x.value + "<br>color2 = " + y.value;

// function isuservalid(bool) {

//     return bool;
// }
// var answer = isuservalid(true) ? "condition true": "condition false";

// console.log(answer);

// const player = "bob";
// let experience = 100;
// var wizard = false;


// if(experience > 90) {

//     var wizard = true;
// }

// console.log(wizard);


