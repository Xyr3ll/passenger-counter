//document.getElementById("count-el").innerText = 5;

// initialize the count as 0
// listen for clicks on the incerement button
// increment the count variable when the button clicked
// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


/*let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function sumLaps() {
    let sum = lap1 + lap2 + lap3;

    console.log(sum);
}

sumLaps(); */

/*let lapsCompleted = 0;

function laps() {
    lapsCompleted = lapsCompleted + 1;
    console.log(lapsCompleted);
}

laps();

laps();

laps(); */

/*let username = "neil";
let message = "You have three new notifications";*/

