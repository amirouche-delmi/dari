const ParticulierModel = require('../models/particulier.model');
const Annonce_particulierModel = require('../models/annonce_particulier.model');
const ObjectID = require('mongoose').Types.ObjectId;
const fs = require('fs');

module.exports.getAllParticulier = async (req, res) => {
    const particuliers = await ParticulierModel.find().select('-password');
    res.status(200).json(particuliers);
};

module.exports.particulierInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id);

    ParticulierModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID unkown : ' + err);
    }).select('-password');
};

module.exports.updateParticulier = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id);

    var particulier = await ParticulierModel.findById(req.params.id).exec();

    try {
        await ParticulierModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    nom: req.body.nom == null || req.body.nom == "" ? particulier.nom : req.body.nom,
                    telephone: req.body.telephone == null || req.body.telephone == "" ? particulier.telephone : req.body.telephone,
                    numR: req.body.numR == null || req.body.numR == "" ? particulier.numR : req.body.numR,
                    adresse: req.body.adresse == null || req.body.adresse == "" ? particulier.adresse : req.body.adresse,
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                if (err) return res.status(500).send({ message: err });
            }
        )
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};

module.exports.deleteParticulier = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id);

    // 1) trouver user que on va supprimer
    var user = await ParticulierModel.findById(req.params.id).exec();

    // 2) supprimer l'id de user dans les tableaux des annonces.list_particulier_suivie
    for (let i = 0; i < user.favoris.length; i++) {
        await Annonce_particulierModel.findByIdAndUpdate(
            user.favoris[i],
            { $pull: { list_particulier_suivie: user._id } },
            { new: true, upsert: true },
            (err, docs) => {
                if (err) return res.status(400).send(err);
            }
        );
    }

    // 3) supprimer toutes les annonces de user
    for (let i = 0; i < user.annonces_ajoutees.length; i++) {

        // 3.1 trouver l'annonce à supprimer
        var annonce = await Annonce_particulierModel.findById(user.annonces_ajoutees[i]).exec();
        var url_image_bien = annonce.url_image_bien;
        
        // 3.2) supprimer l'id de l'annonce dans les tableaux des particuliers qui la suivre
        for (let j = 0; j < annonce.list_particulier_suivie.length; j++) {
            await ParticulierModel.findByIdAndUpdate(
                annonce.list_particulier_suivie[j],
                { $pull: { favoris: annonce._id } },
                { new: true, upsert: true },
                (err, docs) => {
                    if (err) return res.status(400).send(err);
                }
            );
        }

        // 3.3) supprimer l'annonce dans la base de données
        Annonce_particulierModel.findByIdAndRemove(user.annonces_ajoutees[i], (err, docs) => {
            if (err) return res.status(400).send(err);
        })

        // 3.4) supprimer l'image du bien dans ./uploads
        fs.unlink(`${__dirname}/../../client/public/${url_image_bien}`, function(err) {
            if(err && err.code == 'ENOENT') {
                // file doens't exist
                console.info("File doesn't exist, won't remove it.");
            } else if (err) {
                // other errors, e.g. maybe we don't have enough permission
                console.error("Error occurred while trying to remove file");
            } else {
                console.info(`removed`);
            }
        });
    }

    // 4) supprimer user
    try {
        await ParticulierModel.deleteOne({ _id: req.params.id }).exec();    // remove -> deleteOne
            return res.status(200).json({ message: "Successfully deleted. " })
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}