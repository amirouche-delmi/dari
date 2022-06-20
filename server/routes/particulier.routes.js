const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const particulierController = require('../controllers/particulier.controller');

// auth
router.post('/register', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);

// particulier display: 'block',
router.get('/', particulierController.getAllParticulier);
router.get('/:id', particulierController.particulierInfo);
router.put('/:id', particulierController.updateParticulier);
router.delete('/:id', particulierController.deleteParticulier);

module.exports = router;