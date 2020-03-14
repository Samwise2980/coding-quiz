var mainContainer = document.getElementById("main");
// Things needed for the quiz
welcomeScreen();

// A start button & welcome screen
function welcomeScreen() {
  // When the page loads
  // The user is welcomed
  var divRow1 = document.createElement("div");
  var divRow2 = document.createElement("div");
  var divCol1 = document.createElement("div");
  var divCol2 = document.createElement("div");
  var welcome = document.createElement("h2");
  var p1 = document.createElement("p");

  divRow1.setAttribute("class", "row");
  divRow2.setAttribute("class", "row");

  divCol1.setAttribute("class", "col-md");
  divCol2.setAttribute("class", "col-md");

  mainContainer.appendChild(divRow1);
  divRow1.appendChild(divCol1);

  divCol1.appendChild(welcome);
  welcome.setAttribute("class", "text-center")
  welcome.textContent = "Welcome, to the Coding Quiz!";

  // User is prompted to input a name
  mainContainer.appendChild(divRow2);
  divRow2.appendChild(divCol2);
  divCol2.appendChild(p1);

  p1.setAttribute("class", "text-center")
  p1.textContent = "We would like to know you name for us to personaly greet you when you come back to this quiz."

  welcomeInputField();
}

function welcomeInputField() {
  var inputContainer = document.createElement("div");
  var divRow3 = document.createElement("div");
  var divRow4 = document.createElement("div");
  var divCol3 = document.createElement("div");
  var divCol4 = document.createElement("div");
  var inputLabel = document.createElement("label");
  var input1 = document.createElement("input");

  mainContainer.appendChild(inputContainer);
  inputContainer.appendChild(divRow3);
  inputContainer.appendChild(divRow4);
  divRow3.appendChild(divCol3);
  divRow4.appendChild(divCol4);
  divCol3.appendChild(inputLabel);
  divCol4.appendChild(input1);

  inputContainer.setAttribute("class", "container")
  divRow3.setAttribute("class", "row text-left");
  divRow4.setAttribute("class", "row text-left");
  divCol3.setAttribute("class", "col-md");
  divCol4.setAttribute("class", "col-md");


  inputLabel.setAttribute("for", "name");
  inputLabel.textContent = "Enter Name:"
  input1.setAttribute("type", "text");
  input1.setAttribute("id", "name");
  input1.setAttribute("name", "name");
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