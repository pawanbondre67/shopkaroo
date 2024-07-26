import express from 'express';
import { signUp, signIn, logout, isAuthenticated } from '../controllers/authController.js';
import is_Authenticated from '../middlewares/middleware.js';

const router = express.Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.post('/logout', logout);
router.get('/is-authenticated',is_Authenticated, isAuthenticated);

export default router;
