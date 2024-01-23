document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let errors = [];

  // Validate Last Name (assuming it's a required field)
  if (document.getElementById("lastName").value.trim() === '') {
      errors.push("Le nom est requis.");
  }

  // Validate First Name
  if (document.getElementById("firstName").value.trim().length < 3) {
      errors.push("Le prénom doit contenir au moins 3 lettres.");
  }

  // Validate Age
  let age = parseInt(document.getElementById("age").value);
  if (isNaN(age) || age < 18) {
      errors.push("L'âge doit être supérieur à 18 ans.");
  }

  // Validate Email and Confirmation
  let email = document.getElementById("email").value;
  let confirmEmail = document.getElementById("confirmEmail").value;
  if (email !== confirmEmail) {
      errors.push("Les adresses e-mail ne correspondent pas.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Le format de l'adresse e-mail est invalide.");
  }

  // Validate Password and Confirmation
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  if (password.length < 6) {
      errors.push("Le mot de passe doit contenir au moins 6 caractères.");
  } else if (password !== confirmPassword) {
      errors.push("Les mots de passe ne correspondent pas.");
  }

  // Validate CGU Checkbox
  if (!document.getElementById("terms").checked) {
      errors.push("Vous devez accepter les Conditions Générales d'Utilisation.");
  }

  // Display Errors or Proceed
  if (errors.length > 0) {
      let errorHtml = errors.map(error => `<div class="alert alert-danger" role="alert">${error}</div>`).join("");
      document.getElementById("errorMessages").innerHTML = errorHtml;
  } else {
      // Redirect to cracked.gif and then to another page after 3 seconds
      window.location.href = './assets/images/cracked.gif'; // Replace with your actual path
      setTimeout(function() {
          window.location.href = 'terms_and_conditions.html'; // Replace with your desired next page
      }, 3000);
  }
});