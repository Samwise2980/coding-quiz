var mainContainer = document.getElementById("main");
// Things needed for the quiz
welcomeScreen();

// A start button & welcome screen
function welcomeScreen() {
  // The user is welcomed to the page
  var divRow1 = document.createElement("div");
  var divCol1 = document.createElement("div");
  var welcome = document.createElement("h2");

  divRow1.setAttribute("class", "row");

  divCol1.setAttribute("class", "col-md");

  mainContainer.appendChild(divRow1);
  divRow1.appendChild(divCol1);

  divCol1.appendChild(welcome);
  welcome.setAttribute("class", "text-center")
  welcome.textContent = "Welcome, to the Coding Quiz!";
 // Add If statement

  if (localStorage.key("personalName") === null) {
    welcomeInputField()
  } else {
    welcomeFriend();
  }
}

function welcomeFriend() {

  var divRow2 = document.createElement("div");
  var divCol2 = document.createElement("div");
  var p1 = document.createElement("p");
  var personalName = localStorage.getItem("personalName")

  mainContainer.appendChild(divRow2);
  divRow2.appendChild(divCol2);
  divCol2.appendChild(p1);

  divRow2.setAttribute("class", "row");
  divCol2.setAttribute("class", "col-md");
  p1.setAttribute("class", "text-center");

  // User is prompted to input a name
  p1.textContent = "Welcome back " + personalName + "! Let's get started on this quiz.";


}

function welcomeInputField() {
  // Dynamically Created Input Field
  var inputContainer = document.createElement("div");
  var divRow2 = document.createElement("div");
  var divCol2 = document.createElement("div");
  var form1 = document.createElement("form");
  var p1 = document.createElement("p");
  var inputLabel = document.createElement("label");
  var input1 = document.createElement("input");

  mainContainer.appendChild(divRow2);
  divRow2.appendChild(divCol2);
  divCol2.appendChild(p1);

  mainContainer.appendChild(inputContainer);
  inputContainer.appendChild(form1);
  form1.appendChild(inputLabel);
  form1.appendChild(input1);

  inputContainer.setAttribute("class", "container");
  divRow2.setAttribute("class", "row");
  divCol2.setAttribute("class", "col-md");
  form1.setAttribute("method", "post");
  form1.setAttribute("id", "name-form")
  p1.setAttribute("class", "text-center");
  inputLabel.setAttribute("for", "name-input");
  input1.setAttribute("type", "text");
  input1.setAttribute("id", "name-input");
  input1.setAttribute("name", "name-input");
  input1.setAttribute("placeholder", "John Doe");

  // User is prompted to input a name
  p1.textContent = "We would like to know you name for us to personaly greet you when you come back to this quiz.";
  inputLabel.textContent = "Enter Name:";
  nameFormForm();
}

// When form is submitted...
function nameFormForm() {
  var nameInput = document.querySelector("#name-input");
  var nameForm = document.querySelector("#name-form");

  nameForm.addEventListener("submit", function(event) {
    // event.preventDefault();
    var nameText = nameInput.value
    
    if (nameText === "") {
      return;
    }
    
    nameInput.value = "";
    
    localStorage.setItem("personalName", nameText);

  });
}
  
function welcomeBack() {
  // If they have played before from that same IP address
  // Then greet them by saved name
  // A button to begin the quiz appears
}
  
// Timer that counts down
function countDown() {
  // when the button is pressed
  // Initialize a countdown clock
  // Counts down from 5 to 0
  // Flashes BEGIN text
}

// Questions that appear open the screen
function questionsAppear() {
  // 5 questions apear one after the other
  // Multiple choice answers appear
  // Reasearch Radio
  // Let the user click one
  // Submit button to move on to the next question
}
  
// Question checker
function questionChecker() {  
  // Checks to see if they got the right answer
  // IF they did
  // Then give them 10 points
  // Displays a big green check
  // Else
  // Red X on the screen
  // decreases time from each question wrong.
}
  
// Game over screen
function gameOver() {   
  // After time is up
  // Or all questions answered
  // Display Game Over
  // Display right answer total
  // Display wrong answer total
  // Display total points
}
  
// a score screen with input field to store user scores
function scoreScreen() {
  // Score screen appears
  // Prompts the user to input initials
  // Places them on the board according to their score
}

// Try again button
function tryAgain() {
  // A try agian button appears at the bottom of the screen
  // Refreshes the page to start over again
}