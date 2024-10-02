// Add event listener to the Sign In button
document.addEventListener("DOMContentLoaded", function() {
    const signInButton = document.querySelector(".lang-btn + button");
    signInButton.addEventListener("click", function() {
        // Load the signin.html page
        window.location.href = "signin.html";
    });
});