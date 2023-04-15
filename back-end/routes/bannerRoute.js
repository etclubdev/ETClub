import express from "express";
import bannerService from "../services/banner-services.js";
import multer from "multer";
import fs from "fs";
const Router = express.Router();

Router.get("/", async (req, res, next) => {
  const newsList = await bannerService.getAll();
  res.json(newsList);
});
Router.use("/public/images/banners", express.static("public/images/banners/"));
const upload = multer({ dest: "./public/images/banners" });
Router.post("/", upload.single("img"), async (req, res, next) => {
  //data process
  const description = req.body.description;
  const link = req.body.link;
  const stt = req.body.stt;
  //image process
  let fileType = req.file.mimetype.split("/")[1];
  let imgName = req.file.filename + "." + fileType;
  fs.rename(
    `./public/images/banners/${req.file.filename}`,
    `./public/images/banners/${imgName}`,
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send("Error uploading file");
      }
    }
  );

  const addBanner = await bannerService.addBanner(description, imgName, link);
  if (addBanner) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/delete-banner", async (req, res) => {
  const delBanner = await bannerService.delBanner(Object.keys(req.body));
  if (delBanner) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/update-banner", async (req, res) => {
  const { description, link, stt } = req.body;
  const updateBanner = await bannerService.updateBanner(stt, description, link);
  if (updateBanner) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
Router.get("/get-banner-by-id/:stt", async (req, res) => {
  const getById = await bannerService.getById(req.params.stt);
  res.json(getById);
});
export default Router;
