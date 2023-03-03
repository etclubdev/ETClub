import express from 'express'
import competitionService from '../services/competition-service.js';

const Router = express.Router();
Router.get('/competition',async (req,res, next)=>{
    
})

Router.post('/competition', async (req,res)=>{
    //const ret = await competitionService.add(req.body);
})
export default Router;