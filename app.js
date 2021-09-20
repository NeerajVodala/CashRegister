const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector(".btn-check");
const message = document.querySelector(".result");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextContainer = document.querySelector(".next-container");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextContainer.style.display = "none";

billAmount.addEventListener("input", () => {
    nextContainer.style.display = "block";
})

checkButton.addEventListener("click", function onClick() {
    hideMessage()
    if (billAmount.value > 0 && cashGiven.value > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountRemaining = Number(cashGiven.value) - Number(billAmount.value);
            notesToBeGiven(amountRemaining);
            
        } else {
            showMessage("Are you kidding me? Do you want to do dishes?");
        }
    } else {
        showMessage("Value entered must be greater than 0");
    }
});

function notesToBeGiven(amountRemaining) {

    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountRemaining / availableNotes[i]);
        amountRemaining = amountRemaining % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
  }
  
  function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
  }