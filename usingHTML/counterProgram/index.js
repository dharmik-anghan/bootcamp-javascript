const descBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const inscBtn = document.getElementById("increaseBtn");
const countLbl = document.getElementById("countLabel");

let count = 0;

inscBtn.onclick = function () {
    count++;
    countLbl.textContent = count;
}

descBtn.onclick = function () {
    count--;
    countLbl.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLbl.textContent = count;
}