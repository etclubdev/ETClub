import express from "express";
import { createSponsor, deleteSponsor, getAllSponsors, getSponsorById, updateSponsor } from '../controllers/sponsor.controllers.js';

const routerSponsors = express.Router();
routerSponsors.post('/', createSponsor)
routerSponsors.get('/:id', getSponsorById)
routerSponsors.get('/', getAllSponsors)
routerSponsors.patch('/:id', updateSponsor)
routerSponsors.delete('/:id', deleteSponsor)
export default routerSponsors