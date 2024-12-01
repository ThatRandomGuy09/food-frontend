import { Router } from 'express';
import auth from '../backend/middleware/auth';

const router = Router();
router.use(auth);

router.get('/dashboard', async (req, res) => {
  try {
    res.json({ 
      message: 'Protected data retrieved successfully',
      userId: req.user.id 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router; 