const questionElement = document.getElementById("question")
const answerButtons = document.querySelectorAll(".answerBtn")
const nextBtn = document.getElementById("nextBtn")
const scoreText = document.getElementById("score")

const endScreen = document.getElementById("endScreen")
const finalScore = document.getElementById("finalScore")
const restartBtn = document.getElementById("restartBtn")

const quizBox = document.getElementById("quizBox")

let currentQuestion = 0
let score = 0

const questions = [
  {
    question: "What planet is known as the Red Planet?",
    answers: ["Mars", "Venus", "Earth", "Saturn"],
    correct: 0
  },

  {
    question: "Which language runs in a web browser?",
    answers: ["Python", "Java", "C++", "JavaScript"],
    correct: 3
  },

  {
    question: "What is 9 x 8?",
    answers: ["81", "72", "69", "88"],
    correct: 1
  },

  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "Van Gogh",
      "Picasso",
      "Leonardo da Vinci",
      "Michelangelo"
    ],
    correct: 2
  },

  {
    question: "What does HTML stand for?",
    answers: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language"
    ],
    correct: 0
  }
]

function showQuestion() {

  resetButtons()

  const q = questions[currentQuestion]

  questionElement.textContent = q.question

  answerButtons.forEach((button, index) => {
    button.textContent = q.answers[index]

    button.onclick = () => {
      selectAnswer(index)
    }
  })
}

function resetButtons() {
  answerButtons.forEach(button => {
    button.classList.remove("correct")
    button.classList.remove("wrong")
    button.disabled = false
  })
}

function selectAnswer(index) {

  const correctIndex = questions[currentQuestion].correct

  answerButtons.forEach(button => {
    button.disabled = true
  })

  if (index === correctIndex) {

    answerButtons[index].classList.add("correct")

    score++
    scoreText.textContent = score

  } else {

    answerButtons[index].classList.add("wrong")

    answerButtons[correctIndex].classList.add("correct")
  }
}

nextBtn.addEventListener("click", () => {

  currentQuestion++

  if (currentQuestion < questions.length) {

    showQuestion()

  } else {

    endQuiz()
  }
})

function endQuiz() {

  quizBox.classList.add("hidden")

  endScreen.classList.remove("hidden")

  finalScore.textContent =
    `${score} / ${questions.length}`
}

restartBtn.addEventListener("click", () => {

  currentQuestion = 0
  score = 0

  scoreText.textContent = 0

  endScreen.classList.add("hidden")

  quizBox.classList.remove("hidden")

  showQuestion()
})

showQuestion()