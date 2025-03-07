import express from 'express'
import {test,updateUser,signout,getusers,getUser,deleteUser } from '../controllers/user.controller.js'
import { verifyToken } from '../utils/verifyUser.js'

const router= express.Router()

router.get('/test',test) 
router.put('/update/:userId',verifyToken,updateUser);
router.delete('/delete/:userId',verifyToken,deleteUser);
router.post('/signout',signout)
router.get('/getusers',verifyToken,getusers)
router.get('/:userId',getUser)

export default router;