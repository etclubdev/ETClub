import express from "express";
import multer from "multer";
import newsServices from "../services/etNews-services.js";
import fs from "fs";
const Router = express.Router();

Router.get("/", async (req, res, next) => {

  const pageSize = parseInt(req.query.pageSize) || 9;
  const page = parseInt(req.query.page) || 1;

  const skip = (page - 1) * pageSize;

  let result = await newsServices.getAll();
  if (req.query.category && Array.isArray(result)) {
    result = result.filter((item) => {
      return item.category == req.query.category;
    });
  }
  if (req.query.sort && req.query.sort == 1) {

    result = result.sort((a, b) => b.created_at - a.created_at)
  }

  const total = result.length;
  result = result.slice(skip, skip + pageSize);

  res.json({ data: result, total: total });
});
Router.get('/newest', async (req, res) => {
  const news = await newsServices.getNewest();
  res.json(news)
})
Router.get("/:id", async (req, res) => {
  const news = await newsServices.getById(req.params.id);
  res.json(news)
})
Router.use("/public/images/news", express.static("public/images/news/"));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/news');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });
Router.post("/", upload.single("image"), async (req, res, next) => {
  //data process

  //image process
  let fileType = req.file.mimetype.split("/")[1];
  let imgName = req.file.filename + "." + fileType;
  fs.rename(
    `./public/images/news/${req.file.filename}`,
    `./public/images/news/${imgName}`,
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send("Error uploading file");
      }
    }
  );

  const addNews = await newsServices.addNews({ ...req.body, category: parseInt(req.body.category), image: imgName });
  if (addNews) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
export default Router;
