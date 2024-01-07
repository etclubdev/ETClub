import express from "express";
import { createCompetitionResult, deleteCompetitionResult, getAllCompetitionResults, getCompetitionResultById, updateCompetitionResult } from '../controllers/competition-result.controllers.js';


const routerCompetitionResults = express.Router();
routerCompetitionResults.post('/', createCompetitionResult)

routerCompetitionResults.get('/:id', getCompetitionResultById)
routerCompetitionResults.get('/', getAllCompetitionResults)
routerCompetitionResults.patch('/:id', updateCompetitionResult)

routerCompetitionResults.delete('/:id', deleteCompetitionResult)
export default routerCompetitionResults