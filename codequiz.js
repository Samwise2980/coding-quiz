var mainContainer = document.getElementById("main");
// Things needed for the quiz

function removeAllChildren() {
  document.getElementById("main").innerHTML = "";
}

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
  var divRow3 = document.createElement("div");
  var divCol2 = document.createElement("div");
  var divCol3 = document.createElement("div");
  var p1 = document.createElement("p");
  var quizButton = document.createElement("button");
  var personalName = localStorage.getItem("personalName");

  mainContainer.appendChild(divRow2);
  mainContainer.appendChild(divRow3);
  divRow2.appendChild(divCol2);
  divRow3.appendChild(divCol3);
  divCol2.appendChild(p1);
  divCol3.appendChild(quizButton);

  divRow2.setAttribute("class", "row mt-5");
  divCol2.setAttribute("class", "col-md");
  divRow3.setAttribute("class", "row mt-3");
  divCol3.setAttribute("class", "col-md text-center");

  p1.setAttribute("class", "text-center");
  quizButton.setAttribute("id", "quiz-button");
  quizButton.setAttribute("class", "btn btn-primary");
  
  p1.textContent = "Welcome " + personalName + "! Let's get started on this quiz.";
  quizButton.textContent = "Start Quiz"

  document.getElementById("quiz-button").addEventListener("click", function() {

    removeAllChildren();
    countDown();
    
  });
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

  inputContainer.setAttribute("class", "container text-center mt-3");
  inputContainer.setAttribute("style", "width = 500px;")
  inputContainer.setAttribute("style", "height = 500px;")
  divRow2.setAttribute("class", "row");
  divCol2.setAttribute("class", "col-md");
  form1.setAttribute("id", "name-form")
  p1.setAttribute("class", "text-center mt-3");
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
    var nameText = nameInput.value;
    
    if (nameText === "") {
      return;
    }
    
    nameInput.value = "";
    
    localStorage.setItem("personalName", nameText);

  });
}
  
// Timer that counts down
function countDown() {

  var time1 = document.createElement("div");
  var timeRow1 = document.createElement("div");
  var timeCol1 = document.createElement("div");
  
  mainContainer.appendChild(timeRow1);
  timeRow1.appendChild(timeCol1);
  timeCol1.appendChild(time1);

  timeRow1.setAttribute("class", "row");
  timeCol1.setAttribute("class", "col-md text-center");
  time1.setAttribute("style", "font-size: 30px");
  
  var secondsLeft = 6;
    
  var setTimer = setInterval(function() {
      
    secondsLeft--;
      
    time1.textContent = secondsLeft;
      
    // if the countdown reach 0
    if(secondsLeft === 0) {
      // stop the interval
      clearInterval(setTimer);
      removeAllChildren();
      // Flashes BEGIN text
      // call questions

      }
  }, 1000)
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