

let allSpans = document.querySelectorAll(".parent .buttons span");
let results = document.querySelector(".results > span");
let input = document.getElementById("input");

allSpans.forEach(span => {
    span.addEventListener("click" , (e) => {

        if (e.target.classList.contains("check")) {
            checkInput();
            checkItem();
        }

        if (e.target.classList.contains("add")) {
            checkInput();
            addItem();
        }

        if (e.target.classList.contains("del")) {
            checkInput();
            delItem();
        }

        if (e.target.classList.contains("show")) {
            checkInput();
            showItem();
        }
    });
});

function checkInput() {
    if (input.value === "") {
        results.innerHTML = "input feiled can not be empty";
    }
}


function checkItem() {
    if (input.value != "") {

        if (localStorage.getItem(input.value)) {
            results.innerHTML = `this item has been found in the local storage : <span>${input.value}</span>`;
        } else {
            results.innerHTML = `this item has not been found in the local storage : <span>${input.value}</span>`;
        }
        input.focus();

    }
}

function addItem() {
    if (input.value != "") {

        localStorage.setItem(input.value , "Error");
        results.innerHTML = `this item has been added to the local storage : <span>${input.value}</span>`;
        input.value = "";
        input.focus();

    }
}


function delItem() {
    if (input.value != "") {

        if (localStorage.getItem(input.value)) {
            localStorage.removeItem(input.value);
            results.innerHTML = `this item has been removed from the local storage : <span>${input.value}</span>`;
        } else {
            results.innerHTML = `this item does not exist in the local storage : <span>${input.value}</span>`;
        }
        input.value = "";
        input.focus();

    }
}


function showItem() {
    if (localStorage.length) {

        results.innerHTML = `found ${localStorage.length} items :`;
        for (let [key , value] of Object.entries(localStorage)) {
            results.innerHTML += `<span class="key">${key}</span>`;
        }

    } else {
        results.innerHTML = `no items in this local storage`;
    }
}


