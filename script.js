// Récupération des champs de formulaire et du bouton "claim"

const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".submit__btn");

// Récupération des icones erreur

const firstNameErrorIcon = firstName.nextElementSibling;
const lastNameErrorIcon = lastName.nextElementSibling;
const emailErrorIcon = email.nextElementSibling;
const passwordErrorIcon = password.nextElementSibling;

// Récupération des messages d'erreur

const firstNameErrorMessage = document.querySelector("#firstName__error");
const lastNameErrorMessage = document.querySelector("#lastName__error");
const emailErrorMessage = document.querySelector("#email__error");
const passwordErrorMessage = document.querySelector("#password__error");

// Regex

const regexName = /^[A-Z][A-Za-z\é\è\ê\ô\-]+$/;
const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
const regexPassword =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

/**
 * Fonction firstNameValidation pour la validation du champ prénom
 * @param {String} firstName
 */
const firstNameValidation = (firstName) => {
  // Ecoute de l'événement "input" sur l'input firstName
  firstName.addEventListener("input", (e) => {
    e.preventDefault();
    if (firstName.value.trim() == "") {
      firstName.style.borderColor = "var(--red)";
      firstName.style.color = "var(--red)";
      firstNameErrorIcon.style.display = "block";
      firstNameErrorMessage.textContent = "First Name cannot be empty";
    } else if (regexName.test(firstName.value) == false) {
      firstName.style.borderColor = "var(--red)";
      firstName.style.color = "var(--red)";
      firstNameErrorIcon.style.display = "block";
      firstNameErrorMessage.textContent =
        "First Name must begin with a capital letter";
      return false;
    } else {
      firstName.style.borderColor = "var(--green)";
      firstName.style.color = "var(--green)";
      firstNameErrorIcon.style.display = "none";
      firstNameErrorMessage.textContent = "";
      return true;
    }
  });
};
// Appel de la fonction firstNameValidation
firstNameValidation(firstName);

/**
 * Déclaration de la fonction lastNameValidation pour la validation du champ nom
 *  @param {String} lastName
 */
const lastNameValidation = (lastName) => {
  // Ecoute de l'événement "input" sur l'input lastName
  lastName.addEventListener("input", (e) => {
    e.preventDefault();
    if (regexName.test(lastName.value) == false) {
      lastName.style.borderColor = "var(--red)";
      lastName.style.color = "var(--red)";
      lastNameErrorIcon.style.display = "block";
      lastNameErrorMessage.textContent = "Last Name cannot be empty";
      return false;
    } else {
      lastName.style.borderColor = "var(--green)";
      lastName.style.color = "var(--green)";
      lastNameErrorIcon.style.display = "none";
      lastNameErrorMessage.textContent = "";
      return true;
    }
  });
};
// Appel de la fonction lastNameValidation
lastNameValidation(lastName);

/**
 * Déclaration de la fonction emailValidation pour la validation du champ email
 * @param {String} email
 */
const emailValidation = (email) => {
  // Ecoute de l'événement "input" sur l'input email
  email.addEventListener("input", (e) => {
    e.preventDefault();
    if (email.value.trim() == "") {
      email.style.borderColor = "var(--red)";
      email.style.color = "var(--red)";
      emailErrorIcon.style.display = "block";
      emailErrorMessage.textContent = "Email cannot be empty";
    } else if (regexEmail.test(email.value) == false) {
      email.style.borderColor = "var(--red)";
      email.style.color = "var(--red)";
      emailErrorIcon.style.display = "block";
      emailErrorMessage.textContent = "Looks like this is not an email";
      return false;
    } else {
      email.style.borderColor = "var(--green)";
      email.style.color = "var(--green)";
      emailErrorIcon.style.display = "none";
      emailErrorMessage.textContent = "";
      return true;
    }
  });
};
// Appel de la fonction emailValidation
emailValidation(email);

/**
 * Déclaration de la fonction passwordValidation pour la validation du champ email
 * @param {String} password
 */
const passwordValidation = (password) => {
  // Ecoute de l'événement "input" sur l'input password
  password.addEventListener("input", (e) => {
    e.preventDefault();
    if (regexPassword.test(password.value) == false) {
      password.style.borderColor = "var(--red)";
      password.style.color = "var(--red)";
      passwordErrorIcon.style.display = "block";
      passwordErrorMessage.textContent = "Password cannot be empty";
      return false;
    } else {
      password.style.borderColor = "var(--green)";
      password.style.color = "var(--red)";
      passwordErrorIcon.style.display = "none";
      passwordErrorMessage.textContent = "";
      return true;
    }
  });
};
// Appel de la fonction emailValidation
passwordValidation(password);

// Déclaration de la fonction send qui permet d'envoyer les données
const send = () => {
  // Ecoute de l'événement "click" sur le bouton
  btn.addEventListener("click", (e) => {
    // Suppression du comportement par défaut
    e.preventDefault();
    if (
      regexName.test(firstName.value) == false ||
      regexName.test(lastName.value) == false ||
      regexEmail.test(email.value) == false ||
      regexPassword.test(password.value) == false
    ) {
      alert("Please fill in all fields correctly!");
    } else {
      // Création de l'objet contact
      const contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      };
      console.log(contact);
      alert("Registration confirmed!");
      // Rechargement de la page
      window.location.reload();
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      password.value = "";
      window.scrollTo(0, 0);
    }
  });
};
// Appel de la fonction send()
send();
