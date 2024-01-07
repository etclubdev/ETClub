import express from "express";
import { createFeeling, deleteFeeling, getAllFeelings, getFeelingById, updateFeeling } from '../controllers/feeling.controllers.js';
const routerFeelings = express.Router();
routerFeelings.post('/', createFeeling)
routerFeelings.get('/:id', getFeelingById)
routerFeelings.get('/', getAllFeelings)
routerFeelings.patch('/:id', updateFeeling)
routerFeelings.delete('/:id', deleteFeeling)
export default routerFeelings