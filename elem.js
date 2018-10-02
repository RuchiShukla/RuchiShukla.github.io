const input = document.querySelector('input.description');
const ul = document.querySelector('ul.description');
const button = document.querySelector('button.description');
var scores = new Array();

button.addEventListener('click', () => {

console.log(scores);
	ul.innerHTML += '<li class="list-group-item">' + " Dr. "+ input.value + "</li>";
})

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have visited " + localStorage.clickcount + " doctors till now.";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
