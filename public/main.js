const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

const alphabet = {
  'A': 'Adam',
  'B': 'Bertil',
  'C': 'Caesar',
  // Add the rest of the alphabet here
};

let currentLetter = '';

function generateQuestion() {
  const letters = Object.keys(alphabet);
  currentLetter = letters[Math.floor(Math.random() * letters.length)];
  questionElement.innerText = `What is the word for the letter ${currentLetter}?`;
}

function checkAnswer() {
  const answer = answerElement.value.trim();
  if (answer.toLowerCase() === alphabet[currentLetter].toLowerCase()) {
    resultElement.innerText = 'Correct!';
  } else {
    resultElement.innerText = `Wrong! The correct answer is ${alphabet[currentLetter]}.`;
  }
  answerElement.value = '';
  generateQuestion();
}

submitButton.addEventListener('click', checkAnswer);

generateQuestion();
