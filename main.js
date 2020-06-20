// List of all the possible answers when the button is clicked
let answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good",
    "Very doubtful."
]
// Elements that interact with the page
const button = document.querySelector("#answerButton")
const answer = document.querySelector("#answerResult")

// Adds click event to shake button
button.addEventListener("click", function (event) {
    // Makes sure users dont submit blank
      if(questionInput.value.length < 1) {
        alert("Please enter a question!")
        // Displays answers array in the 8 ball
    } else {
        let randomAnswer = Math.floor(Math.random() * Math.floor(answers.length))
        answerResult.innerHTML = answers[randomAnswer]
    }

})