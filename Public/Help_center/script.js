function toggleAnswer(clickedQuestion) {
  const answer = clickedQuestion.nextElementSibling;

  // Hide all answers except the clicked one
  const allAnswers = document.querySelectorAll('.answer');
  allAnswers.forEach(ans => {
    if (ans !== answer) {
      ans.style.display = 'none';
    }
  });

  // Toggle current
  answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}
