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
    //create the loop over the element
    for (let i = 0; i < colorOptions.length; i++ ) {
     if (colorOptions[i].getAttribute('data-theme') === 'js puns' ){
         colorOptions[i].style.display = 'inherit';
     } else {
         colorOptions[i].style.display = 'none';
        }
    }
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



