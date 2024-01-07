import express from "express";
import { getAllTerms } from '../controllers/term.controllers.js';


const routerTerms = express.Router();

routerTerms.get('/', getAllTerms
)

export default routerTerms