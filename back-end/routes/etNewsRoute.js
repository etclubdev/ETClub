import express from "express";
import multer from "multer";
import newsServices from "../services/etNews-services.js";
import fs from "fs";
import db from "../utils/db.js";

const Router = express.Router();

Router.get("/", async (req, res, next) => {
  //model sort
  // 1: newest 
  // 2: popular
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
  if (req.query.sort && req.query.sort == 2) {
    result = result.sort((a, b) => b.view - a.view)
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
  try {
    const { id } = req.params;
    const sql = 'UPDATE et_news SET view = view + 1 WHERE id = ?';
    await db.raw(sql, [id]);
    const news = await newsServices.getById(id);
    return res.json(news);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Lỗi server');
  }

})
Router.get("/getDetailByAdmin/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const news = await newsServices.getById(id);
    return res.json(news);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Lỗi server');
  }

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
Router.post("/update-etnews", upload.single("image"), async (req, res) => {


  const { id, name, tiny_desc, full_news, image, link, category } = req.body;
  let imgName = "";
  if (req.body.image === undefined) {
    let fileType = req.file.mimetype.split("/")[1];
    imgName = req.file.filename + Date.now() + "." + fileType;
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
  }

  try {
    console.log('name', name)
    const update = await newsServices.updateNews(
      id, name, tiny_desc, full_news, link, category,
      req.body.image === undefined ? imgName : image
    );
    if (update) {
      res.json({ code: 200, msg: "OK" });
    }

  } catch (error) {
    res.json({ code: 404, msg: error });
  }
});
Router.post("/delete", async (req, res) => {
  try {
    const del = await newsServices.delNews(Object.keys(req.body));
    if (del)
      res.json({ code: 200, msg: "OK" })
  } catch (error) {
    res.json({ code: 404, msg: error });
  }


});
export default Router;
