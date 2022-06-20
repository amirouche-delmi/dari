const router = require('express').Router();
const annonce_particulierController = require('../controllers/annonce_particulier.controller');
const multer = require('multer');
const upload = multer();

router.get('/', annonce_particulierController.readAnnonce_particulier);
router.get('/:id', annonce_particulierController.annonceInfo);
router.post('/', upload.single('file'), annonce_particulierController.createAnnonce_particulier);
router.put('/:id', upload.single('file'), annonce_particulierController.updateAnnonce_particulier);
router.delete('/:id', annonce_particulierController.deleteAnnonce_particulier);
router.patch('/favorite/:id', annonce_particulierController.favorite);
router.patch('/unfavorite/:id', annonce_particulierController.unfavorite);

module.exports = router;