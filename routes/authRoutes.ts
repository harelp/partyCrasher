import express from 'express';
import { register } from '../controllers/authController';

const router: any = express.Router();

// router.post('/login', login);
router.post('/register', register);
// router.post('/logout', logout);

// router.post('/forgotPassword', forgotPassword);
// router.patch('/validateToken', validateToken);
// router.patch('/resetPassword', resetPassword);
// router.patch('/updatePassword', protect , updatePassword)

export default router;
