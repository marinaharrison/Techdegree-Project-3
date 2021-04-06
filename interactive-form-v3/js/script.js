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
// name = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/ - from stackoverflow: https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
// email = /^[^@]+@[^@.]+\.[a-z]+$/ - from regex Treehouse Workspace
// credit card = /^\d{13,16}$/ - from stackoverflow: https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
// zip code = /^[0-9]{5}/
// cvv = /^[0-9]{3}/  
  
//add an event listener to the form to listen for submit
form.addEventListener('submit', e => {
    e.preventDefault(); //prevents the form from refreshing when a user presses submit

//Below will check if name is valid  
    const isNameValid = nameInput.value;
    const nameTest = /^([a-zA-Z]{1})/.test(isNameValid);
    if(nameTest){
        nameInput.parentElement.classList.add('valid');
        nameInput.parentElement.classList.remove('not-valid');
        }
        else {
          nameInput.parentElement.classList.add('not-valid');
          nameInput.parentElement.classList.remove('valid');

        }

//Below will check if email is valid
const isEmailValid = email.value;
const emailTest = /^[^@]+@[^@.]+\.[a-z]+$/.test(isEmailValid);
if(emailTest){
    email.parentElement.classList.add('valid');
    email.parentElement.classList.remove('not-valid');

    }
    else {
      email.parentElement.classList.add('not-valid');
      email.parentElement.classList.remove('valid');

    } 
    
//Below will check if activities are valid    
    if (totalCost != 0){
        regForActivities.classList.add('valid');
        regForActivities.classList.remove('not-valid');   
   
    } else {
        regForActivities.classList.add('not-valid');
        regForActivities.classList.remove('valid');

    }   

//Below will check if credit card is valid
const isCcValid = cardNumber.value;
const ccTest = /^\d{13,16}$/.test(isCcValid);
if(ccTest){
    cardNumber.parentElement.classList.add('valid');
    cardNumber.parentElement.classList.remove('not-valid');

    }
    else {
      cardNumber.parentElement.classList.add('not-valid');
      cardNumber.parentElement.classList.remove('valid');

    }
    
//Below will check if zip code is valid
const isZipValid = zipCode.value;
const zipTest = /^[0-9]{5}$/.test(isZipValid);
if(zipTest){
    zipCode.parentElement.classList.add('valid');
    zipCode.parentElement.classList.remove('not-valid');

    }
    else {
      zipCode.parentElement.classList.add('not-valid');
      zipCode.parentElement.classList.remove('valid');

    }
    
//Below will check if CVV is valid
const isCcvValid = cvv.value;
const cvvTest = /^[0-9]{3}$/.test(isCcvValid);
if(cvvTest){
    cvv.parentElement.classList.add('valid');
    cvv.parentElement.classList.remove('not-valid');

    }
    else {
      cvv.parentElement.classList.add('not-valid');
      cvv.parentElement.classList.remove('valid');

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