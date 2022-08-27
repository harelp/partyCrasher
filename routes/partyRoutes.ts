import express from 'express';
import {
  getParty,
  getPartyByLoc,
  createParty,
  updateParty,
  deleteParty,
  allParties,
} from '../controllers/partyController';
import { protectedRoute } from '../controllers/authController'

const router: any = express.Router();
// ADMIN
router
  .route('/admin/:id') // -> protected route and restricted
  .patch(updateParty)
  .delete(deleteParty);

router.get('/allParties', protectedRoute, allParties); // -> protected route and restricted

// USER
router.post('/createParty', createParty);

router.route('/:id').get(getParty).patch(updateParty).delete(deleteParty);

// SYSTEM
router.get('/getPartyByLoc', getPartyByLoc);
//router.patch('/updateParty', updateMe); // -> udpates 1 Party at a time
//router.delete('/deleteParty', deleteMe) // -> deletes 1 Party at a time

export default router;
