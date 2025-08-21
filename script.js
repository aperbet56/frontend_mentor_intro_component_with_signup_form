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
    if (regexName.test(firstName.value) == false) {
      firstName.style.borderColor = "var(--red)";
      firstNameErrorIcon.style.display = "block";
      firstNameErrorMessage.textContent = "First Name cannot be empty";
      return false;
    } else {
      firstName.style.borderColor = "var(--green)";
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
      lastNameErrorIcon.style.display = "block";
      lastNameErrorMessage.textContent = "Last Name cannot be empty";
      return false;
    } else {
      lastName.style.borderColor = "var(--green)";
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
    if (regexEmail.test(email.value) == false) {
      email.style.borderColor = "var(--red)";
      emailErrorIcon.style.display = "block";
      emailErrorMessage.textContent = "Email cannot be empty";
      return false;
    } else {
      email.style.borderColor = "var(--green)";
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
      passwordErrorIcon.style.display = "block";
      passwordErrorMessage.textContent = "Password cannot be empty";
      return false;
    } else {
      password.style.borderColor = "var(--green)";
      passwordErrorIcon.style.display = "none";
      passwordErrorMessage.textContent = "";
      return true;
    }
  });
};
// Appel de la fonction emailValidation
passwordValidation(password);
