function addChoices(options) {
  for (var i = 0; i < options.length; i++) {
    let opt = document.createElement('option');
    opt.value = options[i];
    opt.innerHTML = options[i];
    typeSelect.appendChild(opt);
  }
}

function updateChoices() {
  value = document.querySelector('#category').value;
  typeSelect = document.querySelector('#expenseType')
  for (var i = (typeSelect.options.length - 1); i >= 0; i--) {
    typeSelect.options[i].remove()
  }

  if (value == 'expense') {
    options = [('groceries', 'Groceries'), ('gas', 'Gas'), ('entertainment', 'Entertainment'), ('eatOut', 'Eating Out'), ('misc', 'Misc')];
    addChoices(options);
  }
  else if (value == 'bill') {
    options = [('mortgage', 'Mortgage'), ('carLoan', 'Car Loan'), ('utilities', 'Utilities'), ('internet', 'Internet'), ('gym', 'Gym'), ('insurance', 'Insurance'), ('onlineService', 'Online Service')];
    addChoices(options);
  } else {
    options = [('emergency', 'Emergency'), ('goal', 'Goal')];
    addChoices(options);
  }
}

function colorCircles() {
  circles = document.querySelectorAll(".circle");

  for (i = 0; i < 2; i++) {
    percent = parseFloat(document.querySelectorAll(".circle")[i].attributes[1].value.split(",")[0]);

    if (percent < 75) {
      circles[i].setAttribute("style", "stroke:#28a745");
    } else if (percent < 90){
      circles[i].setAttribute("style", "stroke:#ffc107");
    } else {
      circles[i].setAttribute("style", "stroke:#dc3545");
    }

  }

  percent = parseFloat(document.querySelectorAll(".circle")[2].attributes[1].value.split(",")[0]);

  if (percent > 75) {
    circles[2].setAttribute("style", "stroke:#28a745");
  } else if (percent > 25){
    circles[2].setAttribute("style", "stroke:#ffc107");
  } else {
    circles[2].setAttribute("style", "stroke:#dc3545");
  }
}

colorCircles()
