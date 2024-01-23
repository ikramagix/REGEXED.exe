let termsViewed = false;

window.addEventListener("blur", function () {
  termsViewed = true;
});

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let errors = validateForm();

    if (errors.length > 0) {
      document.getElementById("errorMessages").innerHTML = errors.join("<br>");
      return;
    }

    if (termsViewed) {
      document.getElementById("crackedScreen").style.display = "block";
    } else {
      document.getElementById("rejectedScreen").style.display = "block";
    }
  });

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    let errors = [];

    // First name validation
    if (document.getElementById("firstName").value.length < 3) {
      errors.push("Le prénom doit contenir au moins 3 lettres.");
    }

    // Age validation
    if (parseInt(document.getElementById("age").value) < 18) {
      errors.push("L'âge doit être supérieur à 18 ans.");
    }

    // @e-mail validation
    if (
      document.getElementById("email").value !==
      document.getElementById("confirmEmail").value
    ) {
      errors.push("Les adresses e-mail ne correspondent pas.");
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email").value)
    ) {
      errors.push("Le format de l'adresse e-mail est invalide.");
    }

    // Password validation
    if (document.getElementById("password").value.length < 6) {
      errors.push("Le mot de passe doit contenir au moins 6 caractères.");
    } else if (
      document.getElementById("password").value !==
      document.getElementById("confirmPassword").value
    ) {
      errors.push("Les mots de passe ne correspondent pas.");
    }

    // Terms and conditions validation
    if (!document.getElementById("terms").checked) {
      errors.push(
        "Vous devez accepter les Conditions Générales d'Utilisation."
      );
    }
    if (errors.length > 0) {
      event.preventDefault();
      let errorHtml = errors
        .map(
          (error) =>
            `<div class="alert alert-danger" role="alert">${error}</div>`
        )
        .join("");
      document.getElementById("errorMessages").innerHTML = errorHtml;
    }
  });
