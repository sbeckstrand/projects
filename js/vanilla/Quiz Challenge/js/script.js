var question1 = prompt("What is the first name of Ned Starks bastard son?");
var question2 = prompt("What is the first name of Robert Baratheon's oldest son?");
var question3 = prompt ("What is the name of Bran's Direwold?");
var question4 = prompt("What is the name of valyrian style sword that Brienne of Tarth weilds?");
var question5 = prompt("What is the name of the continent Daenerys and Viserys are exciled to?");
var linebreak = "<p>------------------------------------------------------------------</p>";
var qa = 0;
/* 
---------- Question 1 ----------
*/


document.write(linebreak);
document.write("<p>Question 1: What is the first name of Ned Starks bastard son?</p>");

if ( question1.toLowerCase() === 'jon') {
    qa += 1;
    document.write(question1  + " is correct!");
} else {
    document.write(question1 + " is incorrect, the correct answer is 'Jon'.")
}

document.write(linebreak);


/* 
---------- Question 2 ----------
*/


document.write("<p>Question 2: What is the first name of Robert Baratheon's oldest son?</p>");

if ( question2.toLowerCase() === 'gendry') {
    qa += 1;
    document.write(question2  + " is correct!");
} else {
    document.write(question2 + " is incorrect, the correct answer is 'Gendry'.")
}

document.write(linebreak);



/* 
---------- Question 3 ----------
*/


document.write("<p>Question 3: What is the name of Bran's Direwold?</p>");

if ( question3.toLowerCase() === 'summer') {
    qa += 1;
    document.write(question3  + " is correct!");
} else {
    document.write(question3 + " is incorrect, the correct answer is 'Summer'.")
}

document.write(linebreak);

/* 
---------- Question 4 ----------
*/


document.write("<p>Question 4: What is the name of valyrian style sword that Brienne of Tarth weilds?</p>");

if ( question4.toLowerCase() === 'oathkeeper') {
    qa += 1;
    document.write(question4  + " is correct!");
} else {
    document.write(question4 + " is incorrect, the correct answer is 'Oathkeeper'.")
}

document.write(linebreak);


/* 
---------- Question 5 ----------
*/


document.write("<p>Question 5: What is the name of the continent Daenerys and Viserys are exciled to?</p>");

if ( question5.toLowerCase() === 'essos') {
    qa += 1;
    document.write(question5  + " is correct!");
} else {
    document.write(question5 + " is incorrect, the correct answer is 'Essos'.")
}

document.write(linebreak);



/* 
---------- Result + prize ----------
*/

document.write("<p>Result: " + qa + "/5 answered correctly</p>");

if ( qa === 5) {
    document.write("<p>You win a gold prize. Good job!</p>");
}

else if (qa >= 3) {
    document.write("<p>You win a silver prize. Good job!</p>");
}

else if (qa === 2) {
    document.write("<p>You win bronze prize. Nice!</p>");
}

else {
    document.write("<p>You did not win a prize. Sorry!<p>");
}



