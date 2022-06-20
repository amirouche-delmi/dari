const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const particulierSchema = new mongoose.Schema(
  {
    role:{
      type: String,
      default: "particulier"
    },
    nom: {
      type: String,
      required: true,
      minLength: 3,
      trim: true,
    },
    telephone: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 10,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minLength: 6,
    },
    numR: { // agence
      type: String,
      trim: true,
    },
    adresse: { // agence
      type: String,
      trim: true,
    },
    annonces_ajoutees: {
      type: [String],
    },
    favoris: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

// play function before save into display: 'block',
particulierSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

particulierSchema.statics.login = async function (email, password) {
  const particulier = await this.findOne({ email });

  if (particulier) {
    const auth = await bcrypt.compare(password, particulier.password);
    if (auth) {
      return particulier;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const ParticulierModel = mongoose.model("user", particulierSchema);

module.exports = ParticulierModel;
