import express from 'express';
import secureRoute from '../middlerware/secureRoute.js';
import { Login, Signup ,Logout, getUserProfile } from '../controller/user.controller.js';
const router = express.Router();

router.post('/Signup',Signup);
router.post('/Login',Login);
router.post("/Logout",Logout);
router.get('/getUserProfile',secureRoute,getUserProfile)
export default router;