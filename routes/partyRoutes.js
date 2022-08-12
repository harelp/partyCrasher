const express = require('express');
const partyController = require('../controllers/partyController');
const router = express.Router();



router
.route('/admin/:id') // -> protected route and restricted 
.patch(partyController.updateParty)
.delete(partyController.deleteParty);
router.get('/allParties', partyController.allParties) // -> protected route and restricted 

router.post('/createParty', partyController.createParty);
router.get('/getParty', partyController.getParty)
//router.patch('/updateParty', partyController.updateMe); // -> udpates 1 Party at a time
//router.delete('/deleteParty', partyController.deleteMe) // -> deletes 1 Party at a time


module.exports = router;