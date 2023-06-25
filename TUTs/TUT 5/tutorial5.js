
var correctAnswers = 0;
var questions = ["2 ^ 10", "34 + 78", "23 / 4", "(23/2) + 2 / 6", "2 / 4", "2323 * 232332", "Sin^A + Cos^A", "0 / 2323221313", "2.342 * 23", "23.323 + 22323.233"];
var answers = [1024, 112, 5.75, 11.83, 0.5, 539707236, 1, 0, 53889,22346.556 ];

for (var i = 0; i < 10; i++) {
var question = questions[i];
var feedback = document.getElementById("feedback" + (i + 1));

document.getElementById("question" + (i + 1)).innerHTML = question;
}

function check() {
for (var i = 0; i < 10; i++) {
    var answer = document.getElementById("answer" + (i + 1)).value;
    var feedback = document.getElementById("feedback" + (i + 1));

    if (answer == answers[i]) {
    feedback.innerHTML = "&checkmark;";
    feedback.classList.add("correct");
    correctAnswers++;
    } else {
    feedback.innerHTML = "&cross;";
    feedback.classList.add("incorrect");
    feedback.innerHTML += " Correct answer is " + answers[i];
    }
}
}

//   function clearAnswers() {
//     document.getElementById("answer1").value = "";
//     document.getElementById("answer2").value = "";
//   }

