import express from 'express'
import newsServices from '../services/etNews-services.js';

const Router = express.Router();

Router.get('/', async (req, res, next) => {
    const newsList = await newsServices.getAll();
    res.send({ hello: "abc", 1: "so 1" });

})
export default Router;