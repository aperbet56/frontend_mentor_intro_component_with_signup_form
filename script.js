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
