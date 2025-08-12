let final = document.getElementById("finalSubmit");

let answers = ["Infinity", "Peacock feather", "Waste fellow", "Clock", "25"];

final.addEventListener("click", function(event) {
    event.preventDefault();

    let allCorrect = true;

    for (let i = 1; i <= answers.length; i++) {
        let userInput = document.getElementById("answer" + i).value.trim().toUpperCase();
        let correctAnswer = answers[i - 1].toUpperCase();

        if (userInput !== correctAnswer) {
            allCorrect = false;
            break;
        }
    }

    if (allCorrect) {
        alert("Edho oka roju meeru collector avutharu babu... avutharu...");
        final.disabled = true; 
        window.location.href = "funnny.html";
    } else {
        alert("Edichav");
    }
});
