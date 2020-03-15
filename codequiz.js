var mainContainer = document.getElementById("main");
var questions = [
  {
  question: "What is (2 + 3)?",
  answer: 5
  },
  {
  question: "What is (5 + 5)?",
  answer: 10
  },
  {
  question: "What is (1 + 1)?",
  answer: 2
  }
  ];// Things needed for the quiz

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
      questionAppear();
    } 
  }, 1000)
}

// Questions that appear open the screen
  
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

function questionAppear() {

  var divTitleRow = document.createElement("div");
  var divTitleCol = document.createElement("div");
  var divHRRow = document.createElement("div");
  var divHRCol = document.createElement("div");
  var divAnswerRow = document.createElement("div");
  var divAnswerCol = document.createElement("div");
  var formCheck1 = document.createElement("div");
  var formCheck2 = document.createElement("div");
  var formCheck3 = document.createElement("div");
  var formCheck4 = document.createElement("div");
  var buttonRow = document.createElement("div");
  var buttonCol = document.createElement("div");

  var questionTitle = document.createElement("h2");
  var p1 = document.createElement("p");
  var hr1 = document.createElement("hr");
  var formLabel1 = document.createElement("label");
  var radioForm1 = document.createElement("input");
  var formLabel2 = document.createElement("label");
  var radioForm2 = document.createElement("input");
  var formLabel3 = document.createElement("label");
  var radioForm3 = document.createElement("input");
  var formLabel4 = document.createElement("label");
  var radioForm4 = document.createElement("input");
  var submitButton = document.createElement("button");

  mainContainer.appendChild(divTitleRow);
  divTitleRow.appendChild(divTitleCol);
  divTitleCol.appendChild(questionTitle);
  divTitleCol.appendChild(p1);

  mainContainer.appendChild(divHRRow);
  divHRRow.appendChild(divHRCol);
  divHRCol.appendChild(hr1);

  divTitleRow.setAttribute("class", "row");
  buttonRow.setAttribute("class", "row");
  divTitleCol.setAttribute("class", "col-md");
  buttonCol.setAttribute("class", "col-md");

  questionTitle.textContent = "Question 1";
  p1.textContent = questions[0].question;

  mainContainer.appendChild(divAnswerRow);
  mainContainer.appendChild(buttonRow);
  buttonRow.appendChild(buttonCol);
  divAnswerRow.appendChild(divAnswerCol);
  divAnswerCol.appendChild(formCheck1);
  divAnswerCol.appendChild(formCheck2);
  divAnswerCol.appendChild(formCheck3);
  divAnswerCol.appendChild(formCheck4);
  buttonCol.appendChild(submitButton);

  formCheck1.appendChild(radioForm1);
  formCheck1.appendChild(formLabel1);
  formCheck2.appendChild(radioForm2);
  formCheck2.appendChild(formLabel2);
  formCheck3.appendChild(radioForm3);
  formCheck3.appendChild(formLabel3);
  formCheck4.appendChild(radioForm4);
  formCheck4.appendChild(formLabel4);

  formCheck1.setAttribute("class", "form-check");
  formCheck2.setAttribute("class", "form-check");
  formCheck3.setAttribute("class", "form-check");
  formCheck4.setAttribute("class", "form-check");

  divAnswerRow.setAttribute("class", "row");
  divAnswerCol.setAttribute("class", "col-md");
  radioForm1.setAttribute("class", "form-check-input");
  radioForm1.setAttribute("type", "radio");
  radioForm1.setAttribute("name", "answer1");
  radioForm1.setAttribute("id", "answerRadio1");
  radioForm1.setAttribute("value", "option2");
  formLabel1.setAttribute("class", "form-check-label");
  formLabel1.setAttribute("for", "answerRadio1");
  formLabel1.textContent = questions[0].answer;

  radioForm2.setAttribute("type", "radio");
  radioForm2.setAttribute("name", "answer1");
  radioForm2.setAttribute("id", "answerRadio1");
  radioForm2.setAttribute("class", "form-check-input");
  radioForm2.setAttribute("value", "option2");
  formLabel2.setAttribute("class", "form-check-label");
  formLabel2.setAttribute("for", "answerRadio1");
  formLabel2.textContent = questions[0].answer;

  radioForm3.setAttribute("class", "form-check-input");
  radioForm3.setAttribute("type", "radio");
  radioForm3.setAttribute("name", "answer1");
  radioForm3.setAttribute("id", "answerRadio1");
  radioForm3.setAttribute("value", "option2");
  formLabel3.setAttribute("class", "form-check-label");
  formLabel3.setAttribute("for", "answerRadio1");
  formLabel3.textContent = questions[0].answer;

  radioForm4.setAttribute("class", "form-check-input");
  radioForm4.setAttribute("type", "radio");
  radioForm4.setAttribute("name", "answer1");
  radioForm4.setAttribute("id", "answerRadio1");
  radioForm4.setAttribute("value", "option2");
  formLabel4.setAttribute("class", "form-check-label");
  formLabel4.setAttribute("for", "answerRadio1");
  formLabel4.textContent = questions[0].answer;

  submitButton.setAttribute("id", "submit-button");
  submitButton.setAttribute("class", "btn btn-primary mt-3");
  submitButton.textContent = "Submit";

  // 5 questions apear one after the other
  // Multiple choice answers appear
  // Reasearch Radio
  // Let the user click one
  // Submit button to move on to the next question
}
