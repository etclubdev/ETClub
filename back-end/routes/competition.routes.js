import express from "express";
import { createCompetition, deleteCompetition, getAllCompetitions, getCompetitionById, updateCompetition } from '../controllers/competition.controllers.js';

const routerCompetitions = express.Router();
routerCompetitions.post('/', createCompetition)

routerCompetitions.get('/:id', getCompetitionById)
routerCompetitions.get('/', getAllCompetitions)
routerCompetitions.patch('/:id', updateCompetition)

routerCompetitions.delete('/:id', deleteCompetition)
export default routerCompetitions