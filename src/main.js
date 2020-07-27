// background-color: rgb(0, 25, 54);

// background-color: rgb(138, 169, 206);
/*
const db = document.getElementsByClassName(".cb");

db.addEventListener("checked", () => {
  document.body.classList.add(".dark");
});
*/

/*
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('.dark');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
*/
/*
// Initialize Firebase (ADD YOUR OWN DATA)
var Config = {
  apiKey: "AIzaSyAjVBQHbwVVf3WeqbJ_wCBqpIc1lzkk9Lg",
  authDomain: "yogesh-portfolio-dd04f.firebaseapp.com",
  databaseURL: "https://yogesh-portfolio-dd04f.firebaseio.com",
  projectId: "yogesh-portfolio-dd04f",
  storageBucket: "yogesh-portfolio-dd04f.appspot.com",
  messagingSenderId: "751044865049",
  appId: "1:751044865049:web:dc04dfc9220a0915794e88",
  measurementId: "G-4TX0600D0B",
};
firebase.initializeApp(Config);
// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("conta").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show aler
  // Clear form
  document.getElementById("conta").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
  });
}
*/