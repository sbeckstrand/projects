var questions = [
  {question: "What is the first name of Ned Starks bastard son?", answer: "Jon" },
  {question: "What is the first name of Robert Baratheon's oldest son?", answer: "Gendry"},
  {question: "What is the name of Bran's Direwold?", answer: "Summer"},
  {question: "What is the name of valyrian style sword that Brienne of Tarth weilds?", answer: "Oathkeeper"},
  {question: "What is the name of the continent Daenerys and Viserys are exciled to?", answer: "Essos"}
]

for (var i = 0; i < questions.length; i += 1) {
  $("#quizList").append("<li><span>" + questions[i].question + "</span><form><input type='text'></form></li>")
  var inputAnswer = document.getElementById("#inputAnswer").value;
  questions[i].inputAnswer = inputAnswer;
  console.log(questions[i].inputAnswer)
}
