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
