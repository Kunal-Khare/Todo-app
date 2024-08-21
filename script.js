/* const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

    if(inputBox.value === ''){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}
*/

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputBox.value = ""; // clear the input box
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked"); // it will be mark checked with png
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove(); // this function is used for remove the elementt
    saveData();
  }
});

// now adding the storing functionalities to store given input

function saveData() {
  localStorage.setItem("inputdata", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("inputdata");
}
showTask();

// Add an event listener to call the addTask function when the user presses Enter
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
