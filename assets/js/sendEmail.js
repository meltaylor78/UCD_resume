function sendMail(contactForm) {
    emailjs.send("service_y7357u3", "template_c39nyy1", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    alert("Your request has been sent!");
    document.getElementById("fullname").value = "";
    document.getElementById("emailaddress").value = "";
    document.getElementById("projectsummary").value = "";
    return false;  // To block from loading a new page
}