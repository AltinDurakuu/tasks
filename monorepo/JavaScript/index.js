const shuffleBtn = document.getElementById("shuffle-btn");
const changeBtn = document.getElementById("change-btn");
const showSelectedBtn = document.getElementById("show-selected-btn");

let checkboxes = document.getElementsByTagName("input");

const form = document.getElementsByTagName("form")[0];



form.onsubmit = function(e){
    e.preventDefault();
}

shuffleBtn.addEventListener("click", shuffleCheckBoxes);
changeBtn.addEventListener("click", changeValues);
showSelectedBtn.addEventListener("click", showSelectedValues);


//shuffling checkboxes
function shuffleCheckBoxes(){
    let arrayOfGroups = Array.from(document.getElementsByClassName("group-form"));
    let groups = document.getElementById("groups");

    shuffleArray(arrayOfGroups);

    groups.innerHTML = "";

    arrayOfGroups.forEach((group) => {
        groups.appendChild(group);
    });
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// changing values of checkboxes
function changeValues(){
    //if we want to change the labels text too
    // let labels = document.getElementsByTagName("label");
    for (let i=0; i<checkboxes.length; i++) {
        checkboxes[i].value = "Value " + i;
        // labels[i].textContent = "Value " +i;
        // console.log(checkboxes[i].value);
    }
}
// showing selected values
function showSelectedValues(){
    let pForSelcted = document.getElementById("selected-checkboxes");
    pForSelcted.innerHTML = "";
    for (let i=0; i<checkboxes.length; i++) {
        if(checkboxes[i].checked){
            let checkboxValue = checkboxes[i].value;
            pForSelcted.innerHTML += pForSelcted.innerHTML == "" ? checkboxValue : ", " + checkboxValue;
        }
    }
}