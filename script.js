// Getting elements on the page
var userInput = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.querySelector("li");

// getting input length
function inputLength() {
    return userInput.value.length;
}

// getting list length
function itemLength() {
    return item.length;
}

// adding item to list
function createListItem() {
    var li = document.createElement("li"); // creating item "li"
    li.classList.add("delet1"); // add class style
    ul.appendChild(li);

    var check = document.createElement("i");
    check.classList.add("fa", "fa-check");

    li.appendChild(check);

    var txt = document.createElement("span");
    txt.classList.add("text");
    txt.appendChild(document.createTextNode(userInput.value));

    li.appendChild(txt);

    var button = document.createElement("button");
    button.classList.add("dBtn");
    var trash = '<i class="fas fa-trash"></i>';
    button.innerHTML = trash;

    li.appendChild(button);


    //start adding checking btn
    function checkFunction() {
        check.classList.toggle("done");
        li.classList.toggle("delet2");
    }

    li.addEventListener("click", checkFunction);
    //end adding checking btn

    //start adding delete btn

    function deleteItem() {
        button.parentElement.remove();
    }

    button.addEventListener('click', deleteItem);

    //end adding delete btn
    userInput.value = ""; // resets the input field





}

document.getElementById("btn").addEventListener("click", () => {
    if (inputLength() > 0) {
        createListItem();
    } else {
        alert("Please enter a task !")
    }
});

function addEventAfterKeyPress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListItem();
    }
};

userInput.addEventListener('keypress', addEventAfterKeyPress);