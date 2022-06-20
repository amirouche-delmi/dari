const Annonce_particulierModel = require('../models/annonce_particulier.model');
const ParticulierModel = require('../models/particulier.model');
const { uploadErrors } = require('../utils/errors.utils');
const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.readAnnonce_particulier = (req, res) => {
    Annonce_particulierModel.find((err, docs) => {
        console.log('ok')
        if (!err) res.send(docs);
        else console.log('Error to get data : ' + err);
    })
};

module.exports.annonceInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id);

        Annonce_particulierModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID unkown : ' + err);
    })
};

module.exports.createAnnonce_particulier = async (req, res) => {
    if (!ObjectID.isValid(req.body.id_particulier))
        return res.status(400).send('ID unknown : ' + req.body.id_particulier);

    let fileName;

    if (req.file !== null) {
        try {
            if (
                req.file.detectedMimeType !== "image/jpg" &&
                req.file.detectedMimeType !== "image/png" &&
                req.file.detectedMimeType !== "image/jpeg"
            )
                throw Error("invalid file");
        } catch (err) {
            const errors = uploadErrors(err);
            return res.status(201).json({ errors });
        }

        fileName = req.body.id_particulier + Date.now() + ".jpg";

        await pipeline(
            req.file.stream,
            fs.createWriteStream(
                `${__dirname}/../../client/public/uploads/${fileName}`
            )
        );
    }

    const newAnnonce_particulier = new Annonce_particulierModel({
        id_particulier:   req.body.id_particulier,
        url_image_bien:   req.file !== null ? "./uploads/" + fileName : "",
        type_transaction: req.body.type_transaction,
        type_bien:        req.body.type_bien, 
        num_villa:        req.body.num_villa, 
        nbr_etages:       req.body.nbr_etages, 
        num_appartement:  req.body.num_appartement, 
        wilaya_bien:      req.body.wilaya_bien,    
        ville_bien:       req.body.ville_bien,     
        nbr_pieces_bien:  req.body.nbr_pieces_bien,  
        superficie_bien:  req.body.superficie_bien, 
        description_bien: req.body.description_bien, 
        prix_bien:        req.body.prix_bien,
        latitude_bien:    req.body.latitude_bien,    
        longitude_bien:   req.body.longitude_bien,
        nom_prop_bien:    req.body.nom_prop_bien,
        email_prop_bien:  req.body.email_prop_bien,
        tel_prop_bien:    req.body.tel_prop_bien,
    });

    try {
        const annonce_particulier = await newAnnonce_particulier.save();

        // ajouter au particulier.annonces_ajouteres[] l'id du l'annonce ajoutee 
        await ParticulierModel.findByIdAndUpdate(
            req.body.id_particulier,
            { $addToSet: { annonces_ajoutees: annonce_particulier._id } },
            { new: true, upsert: true },
            (err, docs) => {
                if (err) res.status(400).send(err);
            }
        );
        return res.status(201).json(annonce_particulier);
    }
    catch (err) {
        res.status(400).send(err)
    }
};

module.exports.updateAnnonce_particulier = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id);
     
    var annonce_particulier = await Annonce_particulierModel.findById(req.params.id).exec();
    var url_image_bien = annonce_particulier.url_image_bien == "" ? Date.now() + ".jpg" : annonce_particulier.url_image_bien;

    if (req.file != null) {
        try {
            if (
                req.file.detectedMimeType !== "image/jpg" &&
                req.file.detectedMimeType !== "image/png" &&
                req.file.detectedMimeType !== "image/jpeg"
            )
                throw Error("invalid file");
        } catch (err) {
            const errors = uploadErrors(err);
            return res.status(201).json({ errors });
        }

        await pipeline(
            req.file.stream,
            fs.createWriteStream(
                `${__dirname}/../../client/public/${url_image_bien}`
            )
        );
    }
    console.log(req.body);
    Annonce_particulierModel.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                valide: req.body.valide,
                prix_bien:        req.body.prix_bien        == null || req.body.prix_bien        == "" ? annonce_particulier.prix_bien        : req.body.prix_bien,
                ville_bien:       req.body.ville_bien       == null || req.body.ville_bien       == "" ? annonce_particulier.ville_bien       : req.body.ville_bien,
                wilaya_bien:      req.body.wilaya_bien      == null || req.body.wilaya_bien      == "" ? annonce_particulier.wilaya_bien      : req.body.wilaya_bien,
                latitude_bien:    req.body.latitude_bien    == null || req.body.latitude_bien    == "" ? annonce_particulier.latitude_bien    : req.body.latitude_bien,
                longitude_bien:   req.body.longitude_bien   == null || req.body.longitude_bien   == "" ? annonce_particulier.longitude_bien   : req.body.longitude_bien,
                type_transaction: req.body.type_transaction == null || req.body.type_transaction == "" ? annonce_particulier.type_transaction : req.body.type_transaction,
                type_bien:        req.body.type_bien        == null || req.body.type_bien        == "" ? annonce_particulier.type_bien        : req.body.type_bien,
                url_image_bien:   url_image_bien,
                nbr_pieces_bien:  req.body.nbr_pieces_bien  == null || req.body.nbr_pieces_bien  == "" ? annonce_particulier.nbr_pieces_bien  : req.body.nbr_pieces_bien,
                superficie_bien:  req.body.superficie_bien  == null || req.body.superficie_bien  == "" ? annonce_particulier.superficie_bien  : req.body.superficie_bien,
                description_bien: req.body.description_bien == null || req.body.description_bien == "" ? annonce_particulier.description_bien : req.body.description_bien,
                nom_prop_bien:    req.body.nom_prop_bien    == null || req.body.nom_prop_bien    == "" ? annonce_particulier.nom_prop_bien    : req.body.nom_prop_bien,
                email_prop_bien:  req.body.email_prop_bien  == null || req.body.email_prop_bien  == "" ? annonce_particulier.email_prop_bien  : req.body.email_prop_bien,
                tel_prop_bien:    req.body.tel_prop_bien    == null || req.body.tel_prop_bien    == "" ? annonce_particulier.tel_prop_bien    : req.body.tel_prop_bien,
            } 
        },
        { new: true, upsert: true, setDefaultsOnInsert: true},
        (err, docs) => {
            if (!err){ res.send(docs); console.log("udated"); }
            else console.log("Update error : " + err);
        }
    )
};

module.exports.deleteAnnonce_particulier = async (req, res) => {
    if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.id_particulier))
        return res.status(400).send('ID unknown : ' + req.params.id);

    var annonce_particulier = await Annonce_particulierModel.findById(req.params.id).exec();
    var url_image_bien = annonce_particulier.url_image_bien;

    // Supprimer du particulier.annonces_ajoutees[] l'id du l'annonce supprimée
    await ParticulierModel.findByIdAndUpdate(
        req.body.id_particulier,
        { $pull: { annonces_ajoutees: req.params.id } },
        { new: true, upsert: true },
        (err, docs) => {
            if (!err) console.log('ok')//res.send(docs);
            else return res.status(400).send(err);
        }
    );

    // supprimer l'id de l'annonce dans les tableaux des particuliers qui la suivre
    for (var i = 0; i < annonce_particulier.list_particulier_suivie.length; i++) {
        await ParticulierModel.findByIdAndUpdate(
            annonce_particulier.list_particulier_suivie[i],
            { $pull: { favoris: req.params.id } },
            { new: true, upsert: true },
            (err, docs) => {
                if (!err) console.log('ok')//res.send(docs);
                else return res.status(400).send(err);
            }
        );
    }

    Annonce_particulierModel.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log("Delete error : " + err);
    })

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
};

module.exports.favorite = async (req, res) => {
    if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.id_particulier))
        return res.status(400).send('ID unknown : ' + req.params.id);

    try {
        // ajouter à l'annonce_particulier.list_particulier_suivie l'id du particulier qui veut la suivre 
        await Annonce_particulierModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { list_particulier_suivie: req.body.id_particulier } },
            { new: true, upsert: true },
            (err, docs) => {
                if (err) return res.status(400).send(err);
            }
        )

        // ajouter au particulier.annonces_favorites[] l'id du l'annonce favorite 
        await ParticulierModel.findByIdAndUpdate(
            req.body.id_particulier,
            { $addToSet: { favoris: req.params.id } },
            { new: true, upsert: true },
            (err, docs) => {
                if (!err) res.send(docs);
                else return res.status(400).send(err);
            }
        );

    } catch (err) {
        return res.status(400).send(err);
    }
}

module.exports.unfavorite = async (req, res) => {
    if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.id_particulier))
        return res.status(400).send('ID unknown : ' + req.params.id);

    try {
        // Supprimer du l'annonce_particulier.list_particulier_suivie l'id du particulier qui veut plus la suivre  
        await Annonce_particulierModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { list_particulier_suivie: req.body.id_particulier } },
            { new: true, upsert: true },
            (err, docs) => {
                if (err) return res.status(400).send(err);
            }
        )

        // Supprimer du particulier.annonces_favorites[] l'id du l'annonce defavorite 
        await ParticulierModel.findByIdAndUpdate(
            req.body.id_particulier,
            { $pull: { favoris: req.params.id } },
            { new: true, upsert: true },
            (err, docs) => {
                if (!err) res.send(docs);
                else return res.status(400).send(err);
            }
        );

    } catch (err) {
        return res.status(400).send(err);
    }
}