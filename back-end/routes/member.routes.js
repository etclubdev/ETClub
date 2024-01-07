import express from "express";
import { createMember, deleteMember, getAllMembers, getMemberById, updateMember } from '../controllers/member.controllers.js';

const routerMembers = express.Router();
routerMembers.post('/', createMember)
routerMembers.get('/:id', getMemberById)
routerMembers.get('/', getAllMembers)
routerMembers.patch('/:id', updateMember)
routerMembers.delete('/:id', deleteMember)
export default routerMembers