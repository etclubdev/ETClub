import express from "express";
import { createBanner, deleteBanner, getAllBanners, getBannerById, updateBanner } from '../controllers/banner.controllers.js';
const routerBanners = express.Router();
routerBanners.post('/', createBanner)
routerBanners.get('/:id', getBannerById)
routerBanners.get('/', getAllBanners)
routerBanners.patch('/:id', updateBanner)
routerBanners.delete('/:id', deleteBanner)
export default routerBanners