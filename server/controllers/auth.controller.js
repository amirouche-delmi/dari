const ParticulierModel = require("../models/particulier.model");
const { signUpErrors, signInErrors } = require("../utils/errors.utils");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.signUp = async (req, res) => {
  const { role, nom, telephone, email, password, numR, adresse } = req.body;

  try {
    const particulier = await ParticulierModel.create({
      role,
      nom,
      telephone,
      email,
      password,
      numR,
      adresse,
    });
    res.status(201).json({ particulier: particulier._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const particulier = await ParticulierModel.login(email, password);
    const token = createToken(particulier._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ particulier: particulier._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
