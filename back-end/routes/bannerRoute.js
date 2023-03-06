import express from 'express'
import bannerService from '../services/banner-services.js';

const Router = express.Router();

Router.get('/', async (req, res, next) => {
    const newsList = await bannerService.getAll();
})
Router.post('/', async (req, res, next) => {
    const stt = req.body.data.stt
    const description = req.body.data.description
    const img = req.body.data.img
    const link = req.body.data.link
    const addBanner = await bannerService.addBanner(
        stt,
        description,
        img,
        link
      );
    if (addBanner) res.json({code:200, msg:"OK"})
    else res.json({code:404, msg: "ERROR"})
})
export default Router;