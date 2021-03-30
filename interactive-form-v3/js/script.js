//Variables
const jobRole = document.getElementById('title');
const jobRoleOther = document.getElementById('other-job-role');

//Set focus on the name element. 
document.getElementById("name").focus();

//Hide the text field so that it is not displayed when the form first loads.
jobRoleOther.style.display = 'none';

//Create an event listener and create a conditional statment to show the text field if "other" is selected.
jobRole.addEventListener('change', e => {
    if (e.target.value == 'other') {
        jobRoleOther.style.display = 'inherit';
    } else {
        jobRoleOther.style.display = 'none';
    }
    });

    //*****TSHIRT INFO******/

//Variables
const tshirtDesign = document.getElementById('design');
const tshirtColor = document.getElementById('color');
const colorOptions = tshirtColor.children;

//Disable the tshirt color element.
tshirtColor.disabled = true;

//Add an event listener for the tshirt design
tshirtDesign.addEventListener('change', e => {
    //disable the previously enabled tshirt color element
    tshirtColor.disabled = false;

if (e.target.value === 'js puns') {
    //Create the loop over the element targeting js puns only.
    //If js puns is selected, only the js puns colors will show and others will be hidden.
    for (let i = 0; i < colorOptions.length; i++ ) {
     if (colorOptions[i].getAttribute('data-theme') === 'js puns' ){
         colorOptions[i].style.display = 'inherit';
     } else {
         colorOptions[i].style.display = 'none';
        }
    }
    //This is the same loop, but targeting the 'heart js' option.
} else if (e.target.value === 'heart js') {
    for (let i = 0; i < colorOptions.length; i++ ) {
     if (colorOptions[i].getAttribute('data-theme') === 'heart js' ){
         colorOptions[i].style.display = 'inherit';
     } else {
         colorOptions[i].style.display = 'none';
            }
        }
    }
});

//***REGISTER FOR ACTIVITIES***/

//Variables
let regForActivities = document.getElementById('activities');
let cost = document.getElementById('activities-cost');
let totalCost = 0;

//Created and event to listener for the selection of activities
regForActivities.addEventListener('change', e => {
    //adding parseInt to the target will parse through a string and return an interger
    let eventCost = parseInt(e.target.getAttribute('data-cost'))
    //if a box is checked the cost of the event will be added to the total cost.
    if (e.target.checked){
        totalCost += eventCost;
    //if a box is unchecked, the cost will be removed from the total.    
    } else {
       totalCost -= eventCost; 
    }
    //used a template literal and interpolation to update the HTML with the total cost.
    cost.innerHTML= `Total: $${totalCost}`
});







