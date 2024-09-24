const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController'); 

router.get('/admin/all', UserController.getAllAdmin);
router.get('/admin/:id', UserController.getAllAdmin);
router.post('/admin/create', UserController.create);
router.put('/admin/:id', UserController.update);
router.delete('/admin/:id', UserController.delete);

router.post('/register', UserController.register);
router.post('/login', UserController.login);


module.exports = router;