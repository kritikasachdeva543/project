document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const message = `Thank you, ${name}! We will contact you at ${email} soon.`;
    document.getElementById("form-message").innerText = message;

    // Clear the form
    document.getElementById("contact-form").reset();
});
