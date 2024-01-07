import express from "express";
import { createMilestone, deleteMilestone, getAllMilestones, getMilestoneById, updateMilestone } from '../controllers/milestone.controller.js';


const routerMilestones = express.Router();
routerMilestones.post('/', createMilestone)
routerMilestones.get('/:id', getMilestoneById)
routerMilestones.get('/', getAllMilestones)
routerMilestones.patch('/:id', updateMilestone)
routerMilestones.delete('/:id', deleteMilestone)
export default routerMilestones