const addButton = document.querySelector(".text-success");
const addInput = document.querySelector("input");
const nameList = document.querySelector(".nameList");
let nameArray = [];
let randomArray = [];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min+ 1)) + min;
}



document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  if (addInput.value.length > 0) {
    newName = addInput.value;
    addInput.value = "";

    document.querySelector(".nameList").innerHTML += "<div class='input-group mb-1'><p class='form-control text-white mb-0' style='background-color: #333138;'>" + newName + "</p><div class='input-group-append'><button class='btn btn-outline-secondary text-danger border-danger' type='button' onclick='removeButton(event)'><i class='fas fa-times-circle'></i></div></form></div>"
  }

  if (nameList.childNodes.length > 3) {
    if (document.querySelector(".btn-primary") == null) {
      nameList.insertAdjacentHTML('afterend', "<div class='col-sm-8 offset-sm-2 text-center'><button type='button' class='btn btn-primary mt-4' onclick='assignNames(event)'>Continue <i class='fas fa-arrow-alt-circle-right'></i></button></div>");
    }
  }
});

function removeButton(event) {
  currentButton = event.target;
  currentButton.closest('.input-group').remove();

  if (nameList.childNodes.length <= 3) {
    if (document.querySelector(".btn-primary") != null) {
      document.querySelector(".btn-primary").parentElement.remove();
    }
  }
};

function assignNames(event) {


  for (let i=1; i <= nameList.childElementCount; i++) {
    nameArray.push(nameList.childNodes[i].innerText.replace(/\s/g,''));
  }

  let nameCheck = 1;
  while (nameCheck > 0) {
    randomArray = getRandomArray();
    nameCheck = 0;
    for (i=0; i < nameArray.length; i++) {
      if (i == randomArray[i]) {
        nameCheck += 1;
      }
    }
  }

  console.log(nameArray);
  console.log(randomArray);

  document.querySelectorAll('.row')[1].remove();

  let nameContainer = document.querySelector('.container');
  nameContainer.innerHTML += "<div class='row'><table class='table table-bordered text-white'><tbody>";

  for (let i=0; i < nameArray.length; i++) {
    document.querySelector('tbody').innerHTML += "<tr><td>" + nameArray[i] + "</td><td>" + nameArray[randomArray[i]] + "</td></tr>"
  };

  nameContainer.innerHTML += "</tbody></table>";


}

function getRandomArray() {
  let randomArray = [];
  while (randomArray.length < nameArray.length ) {
    currentNumber = getRandomNumber(0, nameArray.length -1);
    if (randomArray.includes(currentNumber) == false) {
      randomArray.push(currentNumber);
    }
  }
  return randomArray;
}
