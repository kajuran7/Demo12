import express from 'express';
const router = express. Router();
import { authUser,registerUser,getUserProfile,logoutUser,updateUserProfile, getAlluser, getUserById, 
} from '../Controllers/userController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';
router.post('/signup', registerUser);
router.post('/login', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect,getUserProfile).patch(protect,updateUserProfile);
router.get('/getallusers', getAlluser);
router.get('/:id', getUserById);
export default router; 