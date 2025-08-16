// Question and answers in object and arrays declared to replace Answer 1, Answer 2, etc on html under #answer-buttons
const questions = [
  {
    question: "What is the capital of Abia State?",
    answers: [
      {text: "Umuahia", correct: true},
      {text: "Asaba", correct: false},
      {text: "Osogbo", correct: false},
      {text: "Onitsha", correct: false},
    ]
  },
  {
    question: "What is the capital of Adamawa State?",
    answers: [
      {text: "Ikeja", correct: false},
      {text: "Yola", correct: true},
      {text: "Osogbo", correct: false},
      {text: "Onitsha", correct: false},
    ]
  },
  {
    question: "What is the capital of Akwa Ibom State?",
    answers: [
      {text: "Ikeja", correct: false},
      {text: "Asaba", correct: false},
      {text: "Osogbo", correct: false},
      {text: "Uyo", correct: true},
    ]
  },
  {
    question: "What is the capital of Anambra State?",
    answers: [
      {text: "Agbor", correct: false},
      {text: "Asaba", correct: false},
      {text: "Awka", correct: true},
      {text: "Onitsha", correct: false},
    ]
  },
  {
    question: "What is the capital of Bauchi State?",
    answers: [
      {text: "Bauchi", correct: true},
      {text: "Numbi", correct: false},
      {text: "Ogbomoso", correct: false},
      {text: "Ajegunle", correct: false},
    ]
  },
  {
    question: "What is the capital of Bayelsa State?",
    answers: [
      {text: "Maiduguri", correct: false},
      {text: "Yenegoa", correct: true},
      {text: "Osogbo", correct: false},
      {text: "Afikpo", correct: false},
    ]
  },
  {
    question: "What is the capital of Benue State?",
    answers: [
      {text: "Oturkpo", correct: false},
      {text: "Asaba", correct: false},
      {text: "Osogbo", correct: false},
      {text: "Makurdi", correct: true},
    ]
  },
  {
    question: "What is the capital of Borno State?",
    answers: [
      {text: "Jos", correct: false},
      {text: "Asaba", correct: false},
      {text: "Maiduguri", correct: true},
      {text: "Onitsha", correct: false},
    ]
  },
  {
    question: "What is the capital of Cross River State?",
    answers: [
      {text: "Atani", correct: false},
      {text: "Abeokuta", correct: false},
      {text: "Ado Ekiti", correct: false},
      {text: "Calabar", correct: true},
    ]
  },
  {
    question: "What is the capital of Delta State?",
    answers: [
      {text: "Ikeja", correct: false},
      {text: "Asaba", correct: true},
      {text: "Osogbo", correct: false},
      {text: "Onitsha", correct: false},
    ]
  },
  {
    question: "What is the capital of Ebonyi State?",
    answers: [
      {text: "Kwara", correct: false},
      {text: "Asaba", correct: false},
      {text: "Abakaliki", correct: true},
      {text: "Bende", correct: false},
    ]
  },
  {
    question: "What is the capital of Edo State?",
    answers: [
      {text: "Okija", correct: false},
      {text: "Ughelli", correct: false},
      {text: "Osogbo", correct: false},
      {text: "Binin City", correct: true},
    ]
  },
  {
    question: "What is the capital of Ekiti State?",
    answers: [
      {text: "Ado Ekiti", correct: true},
      {text: "Warri", correct: false},
      {text: "Abraka", correct: false},
      {text: "Uli", correct: false},
    ]
  },
  {
    question: "What is the capital of Enugu State?",
    answers: [
      {text: "Ogbunabali", correct: false},
      {text: "Enugu", correct: true},
      {text: "Mile 12", correct: false},
      {text: "Diobu", correct: false},
    ]
  },
  {
    question: "What is the capital of Gombe State?",
    answers: [
      {text: "Gombe", correct: true},
      {text: "Mubi", correct: false},
      {text: "Osogbo", correct: false},
      {text: "Akwanga", correct: false},
    ]
  },
  {
    question: "What is the capital of Imo State?",
    answers: [
      {text: "Owerri Nta", correct: false},
      {text: "Nanka", correct: false},
      {text: "Owerri", correct: true},
      {text: "Ago Palace Way", correct: false},
    ]
  },
  {
    question: "What is the capital of Jigawa State?",
    answers: [
      {text: "Jigawa", correct: false},
      {text: "Dutse", correct: true},
      {text: "Abagana", correct: false},
      {text: "Ozumba Mbadiwe", correct: false},
    ]
  },
  {
    question: "What is the capital of Kaduna State?",
    answers: [
      {text: "Rigachikun", correct: false},
      {text: "Zaria", correct: false},
      {text: "Makarfi", correct: false},
      {text: "Kaduna", correct: true},
    ]
  },
  {
    question: "What is the capital of Kano State?",
    answers: [
      {text: "Sabon Gari", correct: false},
      {text: "Kano", correct: true},
      {text: "Kafanchan", correct: false},
      {text: "Marabarido", correct: false},
    ]
  },
  {
    question: "What is the capital of Katsina State?",
    answers: [
      {text: "Daura", correct: false},
      {text: "Asaba", correct: false},
      {text: "Zango Kataf", correct: false},
      {text: "Katsina", correct: true},
    ]
  },
  {
    question: "What is the capital of Kebbi State?",
    answers: [
      {text: "Akwanga", correct: false},
      {text: "Birnin Kebbi", correct: true},
      {text: "Osogbo", correct: false},
      {text: "Makarfi", correct: false},
    ]
  },
  {
    question: "What is the capital of Kogi State?",
    answers: [
      {text: "Ikeja", correct: false},
      {text: "Ankpa", correct: false},
      {text: "Lokoja", correct: true},
      {text: "Onitsha", correct: false},
    ]
  },
  {
    question: "What is the capital of Kwara State?",
    answers: [
      {text: "Kwara", correct: false},
      {text: "Ilorin", correct: true},
      {text: "Abeokuta", correct: false},
      {text: "Ibafo", correct: false},
    ]
  },
  {
    question: "What is the capital of Lagos State?",
    answers: [
      {text: "Banana Island", correct: false},
      {text: "Asaba", correct: false},
      {text: "Osogbo", correct: false},
      {text: "Ikeja", correct: false},
    ]
  },
  {
    question: "What is the capital of Nasarawa State?",
    answers: [
      {text: "Toto", correct: false},
      {text: "Obi", correct: false},
      {text: "Keffi", correct: false},
      {text: "Lafia", correct: true},
    ]
  },
  {
    question: "What is the capital of Niger State?",
    answers: [
      {text: "Suleja", correct: false},
      {text: "Minna", correct: true},
      {text: "Koton Karfe", correct: false},
      {text: "Bida", correct: false},
    ]
  },
  {
    question: "What is the capital of Ogun State?",
    answers: [
      {text: "Abeokuta", correct: true},
      {text: "Asaba", correct: false},
      {text: "Otta", correct: false},
      {text: "Ijebu Ode", correct: false},
    ]
  },
  {
    question: "What is the capital of Ondo State?",
    answers: [
      {text: "Ifon", correct: false},
      {text: "Akure", correct: true},
      {text: "Osogbo", correct: false},
      {text: "Kekentoko", correct: false},
    ]
  },
  {
    question: "What is the capital of Osun State?",
    answers: [
      {text: "Osogbo", correct: true},
      {text: "Asaba", correct: false},
      {text: "Ibadan", correct: false},
      {text: "Ewekoro", correct: false},
    ]
  },
  {
    question: "What is the capital of Oyo State?",
    answers: [
      {text: "Ikeja", correct: false},
      {text: "Asaba", correct: false},
      {text: "Ibadan", correct: true},
      {text: "Onitsha", correct: false},
    ]
  },
  {
    question: "What is the capital of Plateau State?",
    answers: [
      {text: "Langtan", correct: false},
      {text: "Jos", correct: true},
      {text: "Barkin Ladi", correct: false},
      {text: "Katome", correct: false},
    ]
  },
  {
    question: "What is the capital of Rivers State?",
    answers: [
      {text: "Ogbunabali", correct: false},
      {text: "Port Harcourt", correct: true},
      {text: "Etche Alimini", correct: false},
      {text: "Ogbakiri", correct: false},
    ]
  },
  {
    question: "What is the capital of Sokoto State?",
    answers: [
      {text: "Hadejia", correct: false},
      {text: "Sokoto", correct: true},
      {text: "Gambari", correct: false},
      {text: "Tsafe", correct: false},
    ]
  },
  {
    question: "What is the capital of Taraba State?",
    answers: [
      {text: "Jalingo", correct: true},
      {text: "Taraba", correct: false},
      {text: "Kenta", correct: false},
      {text: "Abraka", correct: false},
    ]
  },
  {
    question: "What is the capital of Yobe State?",
    answers: [
      {text: "Ikeja", correct: false},
      {text: "Damaturu", correct: true},
      {text: "Osogbo", correct: false},
      {text: "Abuja", correct: false},
    ]
  },
  {
    question: "What is the capital of Zamfara State?",
    answers: [
      {text: "Narayi", correct: false},
      {text: "Asaba", correct: false},
      {text: "Katsina Ala", correct: false},
      {text: "Gusau", correct: true},
    ]
  }
];

// Constants declarations
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const QuitButton = document.getElementById("game-over");

let currentQuestionIndex = 0;
let score = 0;

// Kickstart the game by declaring question counter and score
function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// Function starts the question and answers
function  showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


  // Looping the answers
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if(answer.correct){ 
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

// Reset answer-buttons from html to enable the class and arrays of questions and answers show
function resetState() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Target correct answers and change background color of 'correc' and 'incorrect' in css
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // Ensuring that more than 1 option is not selected
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";

}


function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  QuitButton.style.display = "none";
}

function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  }else {
    showScore();
  }
}


QuitButton.addEventListener("click", () => {
  showScore();
});

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startGame();
  }
});


startGame();
