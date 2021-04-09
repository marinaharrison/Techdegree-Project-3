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
    
    tshirtColor[1].selected = true; //this targets the 'js puns' tshirt and makes sure it's selected
    for (let i = 0; i < colorOptions.length; i++ ) {
     if (colorOptions[i].getAttribute('data-theme') === 'js puns' ){
         colorOptions[i].style.display = 'inherit';
     } else {
         colorOptions[i].style.display = 'none';
        }
    }
    //This is the same loop, but targeting the 'heart js' option.
} else if (e.target.value === 'heart js') {
    tshirtColor[4].selected = true; // this targets the 'heart js' t shirt and makes sure it's selected
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
selectPayment.selected = true;

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
//This section has been completely refactored after having trouble with my validators on multiple submissions.

//Variables
let name = document.getElementById('name');
let email = document.getElementById('email');
let cardNumber = document.getElementById('cc-num');
let zipCode = document.getElementById('zip');
let cvv = document.getElementById('cvv');
let form = document.querySelector('form');

  
//Function if the regex is accepted
function isValid(element) {
    element.parentElement.classList.add('valid');
    element.parentElement.classList.remove('not-valid');
    element.parentElement.lastElementChild.hidden = true;
}

//Function if regex is not accepted
function isNotValid(element){
    element.parentElement.classList.remove('valid');
    element.parentElement.classList.add('not-valid');
    element.parentElement.lastElementChild.hidden = false;
}

//***Helper Functions***/
//Name
function isNameValid() {
    let nameValue = name.value;
    let nameTest = /^[A-Za-z]{1}/.test(nameValue);
    if (nameTest){
        isValid(name);
        console.log(`name validation test on ${nameValue} evaluates to ${nameTest} `);
    } else {
        isNotValid(name);

    }
    return nameTest;
}

//Email
function isEmailValid() {
    let emailInput = email.value;
    let emailTest = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailInput);
    if (emailTest){
        isValid(email);
    } else {
        isNotValid(email);
    }
    return emailTest;
}

//Register for an at least 1 activity
function isRegValid() {
    if (totalCost != 0){
        regForActivities.classList.add('valid');
        regForActivities.classList.remove('not-valid');   
        regForActivities.lastElementChild.hidden = true;
    } else {
        regForActivities.classList.add('not-valid');
        regForActivities.classList.remove('valid');
        regForActivities.lastElementChild.hidden = false;
} 
}

//Credit Card

function isCreditValid() {
    let cc = cardNumber.value;
    let ccTest = /^\d{13,16}$/.test(cc);
    if (ccTest){
        isValid(cardNumber);
    } else {
        isNotValid(cardNumber);
    }
    return ccTest;
}

//Zip Code
function isZipValid() {
    let zipInput = zipCode.value;
    let zipTest = /^[0-9]{5}$/.test(zipInput);
    if (zipTest){
        isValid(zipCode);
    } else {
        isNotValid(zipCode);
    }
    return zipTest;
}

//CVV
function isCvvValid() {
    let cvvInput = cvv.value;
    let cvvTest = /^[0-9]{3}$/.test(cvvInput);
    if (cvvTest){
        isValid(cvv);
    } else {
        isNotValid(cvv);
    }
    return cvvTest;
}



//Add an event listener to check to only submit if fields are valid
form.addEventListener("submit", e => {
    if (!isNameValid()) {
      e.preventDefault();
    }
    if (!isEmailValid()) {
        e.preventDefault();
      }
      if (!isRegValid()) {
        e.preventDefault();
      }
      if (selectPayment.selected) {
        if (!isCreditValid()) {
          e.preventDefault();
        }
        if (!isZipValid()) {
          e.preventDefault();
        }
        if (!isCvvValid()) {
          e.preventDefault();
        } else {
          selectPayment.selected = false;
        }
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

//Regex sources
// name = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/ - from stackoverflow: https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
// email = /^[^@]+@[^@.]+\.[a-z]+$/ - from regex Treehouse Workspace
// credit card = /^\d{13,16}$/ - from stackoverflow: https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
// zip code = /^[0-9]{5}/
// cvv = /^[0-9]{3}/ 