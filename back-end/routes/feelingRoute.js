import express from "express";

import multer from "multer";
import fs from "fs";
import feelingServices from "../services/feeling-services.js";
const Router = express.Router();

Router.get("/", async (req, res, next) => {
  const newsList = await feelingServices.getAll();
  res.json(newsList);
});
Router.use("/public/images/feeling", express.static("public/images/feeling/"));
// const upload = multer({ dest: "./public/images/feeling" });
// const storage = multer.memoryStorage();
// const upload = multer(storage);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/feeling');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });
Router.post("/", upload.single("avatar"), async (req, res, next) => {
  //data process

  //image process
  let fileType = req.file.mimetype.split("/")[1];
  let imgName = req.file.filename + "." + fileType;
  fs.rename(
    `./public/images/feeling/${req.file.filename}`,
    `./public/images/feeling/${imgName}`,
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send("Error uploading file");
      }
    }
  );

  console.log("req.boy.feeling", req.body);
  const addFeeling = await feelingServices.addFeeling(
    req.body.quote,
    req.body.author,
    req.body.department,
    imgName
  );
  if (addFeeling) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/delete-feeling", async (req, res) => {
  const delFeeling = await feelingServices.delFeeling(Object.keys(req.body));
  if (delFeeling) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/update-feeling", upload.single("avatar"), async (req, res) => {
  //image process

  const { id, quote, author, department, avatar } = req.body;
  let imgName = "";
  if (req.body.avatar === undefined) {
    let fileType = req.file.mimetype.split("/")[1];
    imgName = req.file.filename + "." + fileType;
    fs.rename(
      `./public/images/feeling/${req.file.filename}`,
      `./public/images/feeling/${imgName}`,
      function (err) {
        if (err) {
          console.error(err);
          return res.status(500).send("Error uploading file");
        }
      }
    );
  }
  const updateFeeling = await feelingServices.updateFeeling(
    id,
    quote,
    author,
    department,
    req.body.avatar === undefined ? imgName : avatar
  );
  if (updateFeeling) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
Router.get("/get-feeling-by-id/:id", async (req, res) => {
  const getById = await feelingServices.getById(req.params.id);
  res.json(getById);
});
export default Router;
