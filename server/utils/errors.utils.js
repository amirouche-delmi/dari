module.exports.signUpErrors = (err) => {
  let errors = { nom: "", telephone: "", email: "", password: "", numR: "", adresse: ""};

  if (err.message.includes("nom")) errors.nom = "Le nom doit faire 3 caractères minimum";

  if (err.message.includes("telephone")) errors.telephone = "Le numéro du téléphone doit faire exactement 10";

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password")) errors.password = "Le mot de passe doit faire 6 caractères minimum";
  if (err.message.includes("numR")) errors.password = "numR !!!";
  if (err.message.includes("adresse")) errors.password = "L'adresse !!!";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Email inconnu";

  if (err.message.includes("password"))
    errors.password = "Le mot de pass ne correspond pas";

  return errors;
};

module.exports.uploadErrors = (err) => {
  let errors = { format: "" };

  if (err.message.includes("invalid file"))
    errors.format = "Format incompatible";

  return errors;
};
