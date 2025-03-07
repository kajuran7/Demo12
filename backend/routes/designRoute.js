// productRoutes.js
import express from 'express';

import { isAdmin,protect } from '../middleware/authMiddleware.js';
import { createDesign,deleteDesignById,getDesign,getDesignById, updateDesignById,} from '../Controllers/designController.js';

const router = express.Router(); 

import upload from '../utils/multer.js';

 
router.post('/createdesign',upload.single("designImage"), createDesign); 
router.get('/getdesign', getDesign);
router.get('/:id', getDesignById); 
router.patch('/:id',protect, isAdmin, updateDesignById);
router.delete('/:id',protect,isAdmin,deleteDesignById);




export default router; 
 