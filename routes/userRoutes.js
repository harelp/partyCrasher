const express = require('express');
const bodyParser = require('body-parser');
const userController = require('../controllers/userController');
//const authController = require('../controllers/authController');

const router = express.Router();

router
.route('/admin/:id')
.patch(userController.updateUser)
.delete(userController.deleteUser);

router.get('/allUsers', userController.allUsers) // -> protected route and restricted 
router.patch('/updateMe', userController.updateMe); // -> udpates 1 user at a time
router.delete('/deleteMe', userController.deleteMe) // -> deletes 1 user at a time

module.exports = router;
