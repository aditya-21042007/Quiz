const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What accounts for the majority of out-of-pocket payments for health in the WHO European Region, sometimes pushing people into poverty?',
    answers: [
      { text: 'Hospital stays', correct: false },
      { text: 'Medicines/pharmaceuticals', correct: true },
      { text: 'Acute or emergency care', correct: false }
    ]
  },
  {
    question: 'What percentage of infants, on average, are exclusively breastfed during the first 6 months of life in European countries?',
    answers: [
      { text: '75%', correct: false },
      { text: '68%', correct: false },
      { text: '13%', correct: true }
    ]
  },
  {
    question: 'By how many years has life expectancy in the WHO European Region risen in the past 20 years?',
    answers: [
      { text: '3.7 years', correct: false },
      { text: '4.6 years', correct: true },
      { text: '2.2 years', correct: false }
    ]
  },
  {
    question: 'BONUS: How long has WHO been working to achieve its objective of, as stated in the WHO Constitution, “the attainment by all peoples of the highest possible level of health”?',
    answers: [
      { text: '50 years', correct: false },
      { text: '70 years', correct: true },
      { text: '60 years', correct: false }
    ]
  },
  {
    question: 'What percentage of European countries have a health promoting school policy included in the national education policy?',
    answers: [
      { text: '30 years', correct: false },
      { text: '68 years', correct: true },
      { text: '72 years', correct: false }
    ]
  },
  {
    question: 'How many people in the WHO European Region lack access to a basic drinking-water source?',
    answers: [
      { text: '22 million', correct: false },
      { text: '6 million', correct: false },
      { text: '14 million', correct: true }
    ]
  },
  {
    question: 'Which energy-efficient forms of active transport reduce rates of obesity, diabetes, coronary heart disease, stroke and traffic injuries?',
    answers: [
      { text: 'Cycling', correct: false },
      { text: 'Walking', correct: false},
      { text: 'All of the above', correct: true }
    ]
  },
  {
    question: 'One extra year of life expectancy has been shown to raise gross domestic product (GDP) per capita by how much??',
    answers: [
      { text: '7%', correct: false },
      { text: '4%', correct: true },
      { text: '1%', correct: false }
    ]
  },
  {
    question: 'HWhat percentage of countries in the WHO European Region have a national electronic health (eHealth) policy or strategy?',
    answers: [
      { text: '70%', correct: true },
      { text: '20%', correct: false },
      { text: '50%', correct: false }
    ]
  },
  {
    question: 'In 2014, 73% of men in the European Region were in full-time employment, compared to what percentage of women?',
    answers: [
      { text: '51%', correct: true },
      { text: '61%', correct: false },
      { text: '41%', correct: false }
    ]
  },
  {
    question: 'How many people die each year in the WHO European Region due to air pollution?',
    answers: [
      { text: '300,000', correct: false },
      { text: '900,000', correct: false },
      { text: '600,000', correct: true }
    ]
  },
  {
    question: 'How do the activities of health systems put pressure on the environment?',
    answers: [
      { text: 'By generating hazardous and conventional waste, as well as wastewater', correct: false },
      { text: 'By consuming resources, e.g., water and energy, and producing greenhouse gas emissions', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
  {
    question: 'What were the deadliest extreme weather events in 1991-2015 in Europe?',
    answers: [
      { text: 'Floods', correct: false },
      { text: 'Heat Waves', correct: true },
      { text: 'Earthquakes', correct: false }
    ]
  },
  {
    question: 'Which European diet, recommended as a healthy diet to follow, has lean and fatty fish at its centre?',
    answers: [
      { text: 'Paleo diet', correct: false },
      { text: 'Nordic diet', correct: true },
      { text: 'Gluten-free diet', correct: false }
    ]
  },
  {
    question: 'How many people die each year in the WHO European Region due to air pollution?',
    answers: [
      { text: 'Lower likelihood of having type 2 diabetes', correct: false },
      { text: 'Reduced level of stress', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
  {
    question: 'Human rights violations, along with widespread stigmatization and discrimination, continue to hinder access to health services in the WHO European Region for which 3 diseases?',
    answers: [
      { text: 'Viral hepatitis, HIV and TB', correct: true },
      { text: 'Measles, mumps and rubella', correct: false},
      { text: 'Cardiovascular disease, diabetes and chronic respiratory diseases', correct: false }
    ]
  },
  {
    question: 'Who is responsible for achieving the Sustainable Development Goals?',
    answers: [
      { text: 'Everyone has a role to play in achieving the Sustainable Development Goals', correct: true },
      { text: 'Civil society', correct: false },
      { text: 'Policy makers', correct: false }
    ]
  },
]