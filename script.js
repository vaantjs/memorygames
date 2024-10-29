    <script>
        let correctAnswer = 3;

        function checkAnswer() {
            let userAnswer = document.getElementById('userAnswer').value;
            let result = document.getElementById('result');

            if (parseInt(userAnswer) === correctAnswer) {
                result.textContent = "Correct! The game continues.";
                // Logic to continue the game can be added here
            } else {
                result.textContent = "Incorrect. Try again.";
            }
        }
    </script>
</body>
