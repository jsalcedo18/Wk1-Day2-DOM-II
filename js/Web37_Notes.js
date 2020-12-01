//--------------------------------------------------------------------------------------------------------------
/* Warm Up Notes:
- Events wait for the user to complete something, then provide a response
    - Event Object
        - When an event is triggered, it calls a callback function to exicute --> Called Event Listeners
        */
// - When needing to loop thru a bunch of event types in an array:
var count = 0 //the starting point

variableName.forEach(TypeOfEvent => {
    document.addEventListener(TypeOfEvent, CallbackFunction to be executed ex: event => {
        console.log(count++, TypeOfEvent)
        console.log(event)
        console.log('/n')
    })
});

//❕❗To link .js file to an .html file: <script defer src="index.js"></script> that goes inside the .html file in the <head>

//Event Listeners:

// When you want something to happen as soon as the page loads:
//Old Way...
window.onload = function (TakesAnEvent){ //window.onload can only take one object/be used once
console.log(`an event happened, of type ${TakesAnEvent.type}`)
}
//Modern Way... You can add as many as you want unlike the old way
window.addEventListener('load', event => { //when the load event fires, the callback function (event) gets triggered (aka event listener)
console.log(`${event.type} happened`)
})

//For the event of a click
//1st: Need to reference the button
const theButton = document.querySelector('#theButton')

//2nd: Make the function
theButton.onclick = function (event) {
    console.log(`a ${event.type} happened`)
}

//in order to see/inspect all the information...
theButton.onclick = function (event) {
    debugger //insert this...it pauses execution at that line
    console.log(`a ${event.type} happened`)
}
// target of event is the inner most thing... bc when you click the button your actrually clicking all the parent elements
/* Example:
<body>
    <div>
        <button id="theButton">Click Me</button>
    </div>
</body>
*/
// ***OR*** more modern way...
    theButton.addEventListener('click', event =>{
        console.log(`you ${event.type}ed on the ${even.target.nodeType}`) 
    })
    //Explained:
    launchButton.addEventListener('click', function (event){
      //handle the click event
      console.log(`
        event type: ${event.type}
        event target: ${event.target.nodeName} //.nodeName will be a BUTTON bc thats the Elements name
      `)
    })

// 🚨 Change CSS things using .addEventListener (aka DOM Manipulations)
theButton.addEventListener('click', event =>{
console.log(`about to change the DOM`)
event.target.style.backgroundColor = 'red'
document.body.style.backgroundColor = 'blue'
})

//Event Propagation
function listener(event) {
console.log(`event passing through ${event.currentTarget.nodeName}`) //Output: event passing through BUTTON.... BUTTON is the .nodeName of the current target (theButton)
}

//Then use the ^^^ above function as a callback function in the event object function
theButton.addEventListener('click', listener) //listener is the function above
theDiv.addEventListener('click', listener)
document.body.addEventListener('click', listener)
document.addEventListener('click', listener)
window.addEventListener('click', listener) //will come out undefined because window does not have a .nodename
//No matter which order you put it in, the most deeply nested will always be first, then outlines after that...1st:Button 2nd:Div 3rd:Body
/* 
When a user clicks something, an event object gets generated, then enters the DOM at the root of the tree (target) --> Capture Phase
When the target is reached --> Target Phase
- If there is an event listener attached to the target, it will go bomb and get triggered
- then the object will bubble up and fire event listeners as they go to the parent elements --> Bubbling Phase

*** In order to fire an event listener in the capture phase before it hits target phase = add {capture: true} right after ('click', listener, {capture: true}) 
*/// to stop Propagation:
document.body.addEventListener('click', (event) => event.stopImmediatePropagation()) //add () in order to invoke it. Then stop all event listeners after that line of stopPropagation


//--------------------------------------------------------------------------------------------------------------
//TASK 1- Select the following elements from the DOM: //What did the previous day

// A- BUTTONS
const launchButton = document.querySelector("#launchButton");
const confirmButton = document.querySelector("#confirmButton");
const cancelButton = document.querySelector("#cancelButton");

// B- MESSAGES
const successMessage = document.querySelector("h1.success");
const failureMessage = document.querySelector("h1.failure");

// C- MODAL
const modal = document.querySelector(".modal");

//--------------------------------------------------------------------------------------------------------------
//TASK 2- Demo handling click events on button#launchButton, using:
//A- HTML inside index.html
//in the html file, <button onclick="console.log('setting onclick')" id="launchButton"></button>

//B- The DOM's element.onclick attribute
launchButton.onclick = function (event) { //using this, you are only able to use one event on this element w/this way
//   console.log("about to smash the old school method"); //this will override, (A) on what did in the button HTML
// future code that should run when the user clicks
};

//  C- element.addEventListener('click', callback)
launchButton.addEventListener("click", function (event) {
//   console.log("the better way to add future functionality");
});

launchButton.addEventListener("click", function (event) {
//   console.log("the better way to add future functionality AGAIN");
});

document.addEventListener("click", function (event) {
//   console.log("clicking the document");
if (event.target === launchButton) {
console.log("clicked the launch button");
} else {
console.log("you clicked somewhere else");
}
});

Array.from(document.links).forEach(function (link) { //writing like this is hard to read (will learn more efficent way later)
link.addEventListener("click", function (event) {
console.log(
  `disrupting the default behavior of "${event.target.textContent}" link` //the inside will provide the .textContent of whatever event.target is (in this case) clicked
);
event.preventDefault(); //use when writing forms example: writing in names, information, etc
});
});

//--------------------------------------------------------------------------------------------------------------
//TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.

function launch(event) {
modal.classList.remove("off"); //you are removing the "off" class. Which the "off" class has everything at 0 in CSS
successMessage.classList.add("off"); //adding the "off" class to that particular list 
failureMessage.classList.add("off");
}

launchButton.addEventListener("click", launch);

//--------------------------------------------------------------------------------------------------------------
//TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.

confirmButton.addEventListener("click", (event) => {
modal.classList.add("off");
successMessage.classList.remove("off");
});

//--------------------------------------------------------------------------------------------------------------
//TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.

cancelButton.addEventListener("click", function (event) {
modal.classList.add("off");
failureMessage.classList.remove("off");
});

//--------------------------------------------------------------------------------------------------------------
//TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.

document.addEventListener("keydown", (e) => { //keydown event is fired when a key is pressed (available for any key)
modal.classList.add("off");
});

//--------------------------------------------------------------------------------------------------------------
//TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target :dart: of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
Array.from(document.all).forEach((elem) =>
elem.addEventListener("click", (event) => {
console.log("🎯 target:        ", event.target);
console.log("🧭 current target:", event.currentTarget);
console.log("\n");
})
);

modal.addEventListener("click", (event) => {
console.log("stopping propagation in its tracks!");
event.stopPropagation();
});

//--------------------------------------------------------------------------------------------------------------
//TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {
modal.classList.remove("off");
}

function closeModal() {
modal.classList.add("off");
}

function killReports() {
failureMessage.classList.add("off");
successMessage.classList.add("off");
}

//--------------------------------------------------------------------------------------------------------------
//TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
