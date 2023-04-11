import express from "express";
import bannerService from "../services/banner-services.js";
import multer from "multer";
import fs from "fs";
const Router = express.Router();

Router.get("/", async (req, res, next) => {
  const newsList = await bannerService.getAll();
  res.json(newsList)
});
Router.use("/public/images/banners", express.static("public/images/banners/"));
const upload = multer({ dest: "./public/images/banners" });
Router.post("/", upload.single("img"), async (req, res, next) => {
  console.log(req.body);
  //data process
  const stt = req.body.stt;
  const description = req.body.description;
  
  const link = req.body.link;

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
      console.log("callback");
    }
  );

  const addBanner = await bannerService.addBanner(stt, description, imgName, link);
  if (addBanner) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
export default Router;
