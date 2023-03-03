import express from 'express'
import basicInfomation from '../services/basicInfomation-services'
import categoryServices from '../services/basicInfomation-services.js';
const Router = express.Router();

Router.get('/', async (req,res, next)=>{
    const listInfo = await basicInfomation.getAllInfomation();
    res.json(listInfo);

})

export default Router;