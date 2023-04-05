import express from "express";
import bannerService from "../services/banner-services.js";

const Router = express.Router();

Router.get("/", async (req, res, next) => {
  const newsList = await bannerService.getAll();
  res.json(newsList);
});
Router.post("/", async (req, res, next) => {
  const stt = req.body.stt;
  const description = req.body.description;
  const img = req.body.img;
  const link = req.body.link;
  const addBanner = await bannerService.addBanner(stt, description, img, link);
  if (addBanner) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
export default Router;
