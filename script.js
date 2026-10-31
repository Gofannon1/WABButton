// Find the button and store it in a variable
let button = document.getElementById("wabButton");

// Find the heading and store it in a variable
let message = document.getElementById("message");

// Find the image and store it in a variable
let burgerImage = document.getElementById("burgerImage");

// Listen for a button click
button.addEventListener("click", function () {

    // Add the wabMode class to the page
    document.body.classList.add("wabMode");

    // Change the heading text
    message.textContent = "WAB!";

    // Show the image
    burgerImage.style.display = "block";
});