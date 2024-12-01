import express from 'express';
const router = express.Router();
import { registerUser, loginUser, getMe } from '../backend/controllers/authController.js';
import { protect } from '../backend/middleware/auth';

router.post('/signup', registerUser);
router.post('/signin', loginUser);
router.get('/me', protect, getMe);

export default router; 