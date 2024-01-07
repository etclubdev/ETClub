import express from "express";
import { loginController, logoutController, registerController } from '../controllers/user.controllers.js';



const routerUsers = express.Router();

routerUsers.post('/register', registerController)
routerUsers.post('/login', loginController)
routerUsers.post('/logout', logoutController

)

export default routerUsers