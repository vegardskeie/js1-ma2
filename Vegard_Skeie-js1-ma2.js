//Question 1
const myFunctionExpression = function() {
  console.log("Vegard Skeie");
};

//Question 2
<input type="button" class="btn" value="Click me"></input>;
const button = document.querySelector(".btn.btn-primary");
function callAfterButtonClick() {
  console.log("I was clicked.");
}
button.addEventListener("click", callAfterButtonClick);

//Question 3
function respondToClick() {
  <input class="input" id="firstName"></input>;
  console.log("The button was clicked");
}
<button class="btn btn-primary" onclick="respondToClick()">
  Click me
</button>;

//Question 4
function callOnHover() {
  console.log("The cursor moved over the button");
  <button class="btn" data-animal="dog">
    Hover over me
  </button>;
}
button.addEventListener("mouseover", callOnHover);

const actionButton = document.querySelector("[data-genre='action']");
actionButton.classList.add("active");

//Question 5

//Question 6

//Question 7
const animal = "cow";

if (animal === "cat") {
  console.log("Meow");
} else if (animal === "cow") {
  console.log("Moo");
} else if (animal === "bird") {
  console.log("Tweet");
} else {
  console.log("Harrumph");
}

switch (buttonId) {
  case "cat":
    arrayToLoopThrough = animal;
    break;

  case "cow":
    arrayToLoopThrough = animal;
    break;

  case "bird":
    arrayToLoopThrough = animal;
    break;

  default:
    arrayToLoopThrough = [];
}

//Question 8
const sheep = ["Malcolm", "Anders", "Marie"];

for (let i = 0; i < sheep.length; i++) {
  console.log(sheep[i]);
}

const sheep = [
  {
    name: "Malcolm"
  },
  {
    name: "Anders"
  },
  {
    name: "Marie"
  }
];

function handleEachSheep(item) {
  console.log(item.name);
}

sheep.forEach(handleEachSheep);

//Question 9
let counter = 0;
const helloTimer = setInterval(() => {
  console.log("Hello");
  counter += 1;
  if (counter === 6) {
    console.log("Done");
    clearInterval(helloTimer);
  }
}, 500);

//Question 10
<div class="container">Placeholder text</div>;

const timeoutContainer = document.querySelector("div.container");
const timeoutButton = document.querySelector("button.container");

timeoutButton.addEventListener("click", updateDivAfterClick);

function updateDivAfterClick() {
  timeoutContainer.innerText = "Placeholder text";
  timeoutContainer.classList.add("Text updated");

  setTimeout(function() {
    timeoutContainer.innerText = "Placeholder text";
    timeoutContainer.classList.remove("Text updated");
  }, 2000);
}
