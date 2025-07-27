document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let score = 0;

  const answers = {
    q1: 'Paris',
    q2: 'Mars',
    q3: 'Blue Whale'
  };

  const form = new FormData(e.target);

  for (let [key, value] of form.entries()) {
    if (answers[key] === value) {
      score++;
    }
  }

  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('score').textContent = `Score: ${score}`;
});
