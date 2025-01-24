const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const splashScreen = document.getElementById("splash-screen");
  const quizContainer = document.getElementById("quiz");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  
  // Fungsi untuk menghilangkan splash screen setelah beberapa detik
  setTimeout(() => {
    splashScreen.style.display = "none"; // Sembunyikan splash screen setelah 3 detik
    quizContainer.classList.add("active"); // Tampilkan quiz
    showQuestion(); // Tampilkan pertanyaan pertama
  }, 3000); // Menunggu 3 detik
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      li.onclick = () => selectOption(option);
      optionsElement.appendChild(li);
    });
  }
  
  function selectOption(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
      score++;
    }
    nextButton.disabled = false; // Enable next button after selecting an answer
  }
  
  function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
    nextButton.disabled = true; // Disable next button until answer is selected
  }
  
  function showResult() {
    quizContainer.classList.remove("active");
    resultContainer.classList.add("active");
    scoreElement.textContent = score;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.add("active");
    resultContainer.classList.remove("active");
    showQuestion();
    nextButton.disabled = true;
  }
  
  nextButton.onclick = showNextQuestion;
  restartButton.onclick = restartQuiz;
  