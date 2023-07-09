
const listContainer = document.getElementById("list-container");
const inputField = document.getElementById("input-field");

const button = document.getElementById("primary-btn");
button.addEventListener("click", () => {
    addTask();
})
function addTask() {

    if(inputField.value === "") {
        alert("You must enter a task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputField.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

//Saving data using localStorage methods
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();
