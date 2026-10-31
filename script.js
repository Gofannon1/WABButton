const button = document.getElementById("wabButton"); // Find the button on the page.
const message = document.getElementById("message"); // Find the message on the page.
button.onclick = function () { // Run this code when the button is clicked.
    document.body.style.background = "linear-gradient(to right, black 50%, yellow 50%)"; // Make the left half black and the right half yellow.
    message.textContent = "WAB !"; // Change the message to WAB !.
    message.style.backgroundColor = "black"; // Give the message a black background so it is easy to read.
    message.style.color = "yellow"; // Make the message yellow.
}; // Finish the button click code.
