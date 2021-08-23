/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  console.log(excusa);
  let excusa = excuse(who, action, what, when);
  console.log(excusa);
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excusa;
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuse(array1, array2, array3, array4) {
  let randomNumberWho = Math.floor(Math.random() * array1.length);
  let randomNumberAction = Math.floor(Math.random() * array2.length);
  let randomNumberWhat = Math.floor(Math.random() * array3.length);
  let randomNumberWhen = Math.floor(Math.random() * array4.length);

  return (
    array1[randomNumberWho] +
    " " +
    array2[randomNumberAction] +
    " " +
    array3[randomNumberWhat] +
    " " +
    array4[randomNumberWhen]
  );

  console.log(excuse);
}
