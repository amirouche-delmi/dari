const mongoose = require('mongoose');

const annonce_particulierSchema = new mongoose.Schema(
    {
        valide: { type: Boolean, default: false },

        id_particulier: { type: String },

        type_transaction: { type: String, trim: true },

        type_bien: { type: String, trim: true },

        num_villa: { type: String, trim: true},

        nbr_etages: { type: String, trim: true},

        num_appartement: { type: String, trim: true},

        wilaya_bien: { type: String, trim: true },

        ville_bien: { type: String, trim: true },

        url_image_bien: { type: String },

        nbr_pieces_bien: { type: String, trim: true },

        superficie_bien: { type: String, trim: true },

        description_bien: { type: String, trim: true },

        prix_bien: { type: String, trim: true },

        latitude_bien: { type: String, trim: true },

        longitude_bien: { type: String, trim: true },

        nom_prop_bien: { type: String, trim: true }, //agence
        tel_prop_bien: { type: String, trim: true }, //agence
        email_prop_bien: { type: String, trim: true }, //agence

        list_particulier_suivie: { type: [String] }
    },
    {
        timestamps: true,
    }
)

const Annonce_particulierModel = mongoose.model('annonce', annonce_particulierSchema);

module.exports = Annonce_particulierModel;