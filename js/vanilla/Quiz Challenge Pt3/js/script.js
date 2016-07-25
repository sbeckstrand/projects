//List of Questions
var gotQuiz = [
  ["What is the first name of Ned Starks bastard son?", "Jon"],
  ["What is the first name of Robert Baratheon's oldest son?", "Gendry"],
  ["What is the name of Bran's Direwold?", "Summer" ],
  ["What is the name of valyrian style sword that Brienne of Tarth weilds?", "Oathkeeper"],
  ["What is the name of the continent Daenerys and Viserys are exciled to?", "Essos"]
];

var total = 0;

// capitalize the first letter of string
function titleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Prompt for questions and then return results
function runQuiz(quiz) {

  // Ask questions and get input
  for ( i = 0; i < quiz.length; i += 1 ) {
    answer = titleCase(prompt(quiz[i][0]));
    quiz[i].push(answer);
    if (answer === quiz[i][1]) {
      total += 1;
    }
  };

  // Print out results
  for (i = 0; i < quiz.length; i += 1 ) {
    document.write(
      "<p>Question " + i + ": " + quiz[i][0] + "</p>" +
      "<p>Correct Answer: " + quiz[i][1] + "</p>" +
      "<p>Your Answer: " + quiz[i][2] + "</p>" +
      "<p>---------------------------</p>"
    );

  };

  document.write(
    "You answered " + total + "/" + quiz.length + " correctly."
  );
};

runQuiz(gotQuiz);
