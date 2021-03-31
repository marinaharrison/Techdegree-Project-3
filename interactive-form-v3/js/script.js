//*******TECHDEGREE PROJECT 3*********/
// author: Marina Harrison

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

    //*********REGISTER FOR ACTIVITIES************/

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

    //************PAYMENT INFO***********/

//Variables
let payment = document.getElementById('payment');
let creditcard = document.getElementById('credit-card');
let paypal = document.getElementById('paypal');
let bitcoin = document.getElementById('bitcoin');

//Hide the paypal and bitcoin elements
paypal.style.display = 'none';
bitcoin.style.display = 'none';

//target payment second child element and give it the "selected" property
const selectPayment = payment.firstElementChild.nextElementSibling;
selectPayment.setAttribute('selected', 'selected');

//show the payment method that is selected
payment.addEventListener('change', e => {
    if (e.target.value === 'paypal') {
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
        creditcard.style.display = 'none';
    } else if (e.target.value === 'bitcoin') {
        bitcoin.style.display ='block';
        paypal.style.display = 'none';
        creditcard.style.display = 'none';
    } else {
        paypal.style.display ='none';
        bitcoin.style.display = 'none';
        creditcard.style.display='block';
    }
});

//*************FORM VALIDATION***************/
//my register for activites variable is on line 63

//Variables
let nameInput = document.getElementById('name');
let email = document.getElementById('email');
let cardNumber = document.getElementById('cc-num');
let zipCode = document.getElementById('zip');
let cvv = document.getElementById('cvv');
let form = document.querySelector('form');

//Regex sources
// name = /^[A-Za-z]+$/ - from regex Treehouse Workspace
// email = /^[^@]+@[^@.]+\.[a-z]+$/ - from regex Treehouse Workspace
// credit card = /^4[0-9]{12}(?:[0-9]{3})?$/ - from stackoverflow: https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
// zip code = /^[0-9]{5}/
// cvv = /^[0-9]{3}/  
  
//add an event listener to the form to listen for submit
form.addEventListener('submit', e => {
    e.preventDefault(); //prevents the form from refreshing when a user presses submit

//Below will check if name is valid  
    e.target.nameInput;
    const isNameValid = nameInput.value;
    const nameTest = /^[A-Za-z]+$/.test(isNameValid);
    if(nameTest){
        nameInput.parentElement.classList.add('valid');
        }
        else {
          nameInput.parentElement.classList.add('not-valid');
        }

//Below will check if email is valid
e.target.email;
const isEmailValid = email.value;
const emailTest = /^[^@]+@[^@.]+\.[a-z]+$/.test(isEmailValid);
if(emailTest){
    email.parentElement.classList.add('valid');
    }
    else {
      email.parentElement.classList.add('not-valid');
    } 
    
//Below will check if credit card is valid
e.target.cardNumber;
const isCcValid = cardNumber.value;
const ccTest = /^4[0-9]{12}(?:[0-9]{3})?$/.test(isCcValid);
if(ccTest){
    cardNumber.parentElement.classList.add('valid');
    }
    else {
      cardNumber.parentElement.classList.add('not-valid');
    }
    
//Below will check if zip code is valid
e.target.zipCode;
const isZipValid = zipCode.value;
const zipTest = /^[0-9]{5}/.test(isZipValid);
if(zipTest){
    zipCode.parentElement.classList.add('valid');
    }
    else {
      zipCode.parentElement.classList.add('not-valid');
    }
    
//Below will check if CVV is valid
e.target.cvv;
const isCcvValid = cvv.value;
const cvvTest = /^[0-9]{3}/.test(isCcvValid);
if(cvvTest){
    cvv.parentElement.classList.add('valid');
    }
    else {
      cvv.parentElement.classList.add('not-valid');
    }
    
//Below will check if activities is valid
e.target.regForActivities;
for (let i = 0; i < regForActivities.length; i++)
if (e.target.checked){
    regForActivities.parentElement.classList.add('valid');   
} else {
    regForActivities.parentElement.classList.add('not-valid');
}
});

//*************Accessibility************* */
let activitiesCheck = document.querySelectorAll("input[type=checkbox]");

for (let i = 0; i < activitiesCheck.length; i++) {
    activitiesCheck[i].addEventListener('focus', (event) => {
        activitiesCheck[i].parentElement.classList.add('focus');
    });
    activitiesCheck[i].addEventListener('blur', (event) => {
        activitiesCheck[i].parentElement.classList.remove('focus');
    });
}