// Simple form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you for your message, " + name + ". I will get back to you shortly!");
    document.getElementById("contact-form").reset();  // Reset form after submission
  } else {
    alert("Please fill in all fields.");
  }
});
