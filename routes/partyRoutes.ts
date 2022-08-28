import express from 'express';
import {
  getParty,
  getPartyByLoc,
  createParty,
  updateParty,
  deleteParty,
  allParties,
} from '../controllers/partyController';
import { protectedRoute, restricted } from '../controllers/authController';

const router: any = express.Router();
// ADMIN
router
  .route('/admin/:id') // -> protected route and restricted
  .patch(protectedRoute, updateParty)
  .delete(protectedRoute, deleteParty);

router.get('/allParties', protectedRoute, restricted('admin'), allParties); // -> protected route and restricted

// USER
router.post('/createParty', protectedRoute, createParty);

router
  .route('/:id')
  .get(protectedRoute, getParty)
  .patch(protectedRoute, updateParty)
  .delete(protectedRoute, restricted('admin'), deleteParty);

// SYSTEM
router.get('/getPartyByLoc', getPartyByLoc);
//router.patch('/updateParty', updateMe); // -> udpates 1 Party at a time
//router.delete('/deleteParty', deleteMe) // -> deletes 1 Party at a time

export default router;
