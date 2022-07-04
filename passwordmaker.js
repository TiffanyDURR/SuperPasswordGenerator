const dataLowercase = "qwertyupasdfghjkzxcvbnm";
const daraUppercase = dataLowercase.toUpperCase();
const dataNumbers = "23456789";
const dataSymbols = "!#$%&?-_";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
const passwordContainer = document.getElementById("password-container");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...daraUppercase);
  if (number.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);
  // Ajoute dataLowercase etc. au tableau "data".
  // ... spread operator = separe chaque élément.
  if (data.length === 0) {
    // Si aucun n'est coché.
    alert("Veuillez selectionner des critères");
    return;
    // Return = la fonction stoppe ici.
  }

  for (i = 0; i < rangeValue.value; i++) {
    // On définit i = 0.
    // I va aller jusqu'au chiffre selectionné par l'utilisateur (8 caractères, 12 caractères etc.).
    // Et ajouter un caractère à chaque fois.
    password += data[Math.floor(Math.random() * data.length)];
    // Password = data * chiffre au hasard * (chiffre arrondi à l'inferieur) multiplié par la longueur de data (25 pour les lettres, 8 pour les chiffres etc.).
  }
  passwordOutput.value = password;
  passwordContainer.innerHTML = `Votre mot de passe <br> <span class="mdp">${passwordOutput.value}<span>`;
  // Change le titre "Générateur de mot de passe".

  passwordOutput.select();
  // Selectionne le contenu de passwordOutput
  document.execCommand("copy");
  // Copie le contenu de passwordOutput

  generateButton.textContent = "Mot de passe copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer un nouveau mot de passe";
  }, 3000);
}

generateButton.addEventListener("click", generatePassword);
// Joue la fonction au click.
