let questions = [
    "What's your partner's favorite movie?",
    "What's their biggest fear?",
    "What's their dream vacation destination?",
    "What's their favorite food?",
    "Describe them in three words."
  ];
  
  let currentQuestion = 0;
  let answers = [];
  
  function nextQuestion() {
    const answerInput = document.getElementById('answer');
    if (answerInput.value.trim() !== "") {
      answers.push({
        question: questions[currentQuestion],
        answer: answerInput.value.trim()
      });
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestion];
        answerInput.value = "";
      } else {
        window.location.href = 'results.html';
      }
    }
  }
  
  function sendEmail(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
  
    // Simulate sending data to the backend
    console.log("Collected Data:", {
      answers: answers,
      email: email
    });
  
    alert("Thank you! Your data has been received.");
  }
  