let guineaPig = document.getElementById("guinea-pig");

function toggleClass(newClass) {
  console.log("class list", guineaPig.classList)
  guineaPig.classList.toggle(newClass);
  console.log("guineaPig.classList", guineaPig.classList);
}

// document.getElementById("add-color").addEventListener("click", function() {
//   toggleClass("blue");
// });

// document.getElementById("make-large").addEventListener("click", function() {
//   toggleClass("large");
// });

// document.getElementById("add-border").addEventListener("click", function() {
//   toggleClass("bordered");
// });

// document.getElementById("add-rounding").addEventListener("click", function() {
//   toggleClass("rounded");
// });

let associatedIdClass = {
  "add-color": "blue",
  "make-large": "large",
  "add-border": "bordered",
  "add-rounding": "rounded"
}

// Let's add a new button and append it to the DOM
let yellowButton = document.createElement("button")
let buttonId = "color-yellow"
yellowButton.textContent = "Add sunshine"
yellowButton.id = buttonId
// debugger
document.querySelector("#effect-buttons").appendChild(yellowButton)
// debugger

// In order to have our for in loop attach an event listener to the new button, we need to add the appropriate key value pair to the object
associatedIdClass[buttonId] = "yellowify"
// debugger


// for in loops are used to iterate over the key value pairs in an object. See documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
for(let elementId in associatedIdClass) {
  document.getElementById(elementId).addEventListener("click", function() {
    toggleClass(associatedIdClass[elementId]);
  })
}

// event.target is the most specific element on which the event happened

// event.currentTarget is the element on which the event listener is attached
document.querySelector("body").addEventListener("click", function(event) {
  console.log("You clicked on the body of the DOM")
  console.log("event target", event.target)
  // console.log("event current target", event.currentTarget)
})
