document.addEventListener("DOMContentLoaded", function() {
    var studentPageLink = document.getElementById("studentPageLink");
    if (studentPageLink) {
        studentPageLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default action of the link
            window.location.href = studentPageLink.getAttribute("href"); // Navigate to the student page
        });
    }
});
