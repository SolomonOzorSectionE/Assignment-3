# Assignment-3


displayQuestion():
This function is responsible for displaying the current question to the user.
It retrieves the question and options from the `questions` array based on the `currentQuestion` index.
It updates the HTML elements (`questionText` and `optionsList`) to show the current question and its options.

checkAnswer():
This function checks the user's selected answer against the correct answer for the current question.
It provides immediate feedback to the user about whether their answer was correct or incorrect.
If the answer is correct, it increments the `score` variable.
It also updates the `currentQuestion` index to move to the next question, or if there are no more questions, it displays the final score.

quizForm.addEventListener('submit', function (e)):
This event listener is attached to the form submission event.
When the user submits their answer by clicking the submit button, this event listener triggers the `checkAnswer()` function to evaluate the response.

DOMContentLoaded Event Listener:
This event listener ensures that the JavaScript code runs only after the DOM content is fully loaded.
It ensures that the script doesn't try to access HTML elements before they exist, preventing potential errors.

