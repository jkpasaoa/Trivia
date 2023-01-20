//error if input a number instead of a name
function submitCheck(e) {
    e.preventDefault();
    const nameInput = document.querySelector("#playerNameInput").value;
    const isNumber = !isNaN(nameInput);
    const isEmpty = nameInput.length === 0;
    if (isNumber || isEmpty) {
        alert("That is not a valid input. Please type again!");
        return false;
    } else {
        const playerNameInput = String(document.getElementById("playerNameInput").value);
        console.log(playerNameInput)
        return window.location.href = "questions.html";
    // navigate the window location to the next html adding the nameInput as query parameter to the end of the url
    }
}

const playerNameForm = document.querySelector("#playerNameForm")
playerNameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    submitCheck(event);
});
