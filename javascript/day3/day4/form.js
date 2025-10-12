const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop form from submitting

  let isValid = true;

  // Username
  const username = document.getElementById("username").value;
  if (username.trim() === "") {
    document.getElementById("userError").textContent = "Username required";
    isValid = false;
  } else {
    document.getElementById("userError").textContent = "";
  }

  // Email
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter valid email";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password
  const pass = document.getElementById("password").value;
  if (pass.length < 6) {
    document.getElementById("passError").textContent = "Min 6 characters";
    isValid = false;
  } else {
    document.getElementById("passError").textContent = "";
  }

  // Final
  if (isValid) {
    alert("Form submitted successfully ✅");
  }
});