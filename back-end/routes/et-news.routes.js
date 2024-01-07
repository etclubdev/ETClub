import express from "express";
import { createEtNews, deleteEtNews, getAllEtNews, getEtNewsById, updateEtNews } from '../controllers/et-news.controllers.js';

const routerEtNews = express.Router();
routerEtNews.post('/', createEtNews)
routerEtNews.get('/:id', getEtNewsById)
routerEtNews.get('/', getAllEtNews)
routerEtNews.patch('/:id', updateEtNews)

routerEtNews.delete('/:id', deleteEtNews)
export default routerEtNews;