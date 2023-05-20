import express from "express";
import fs from "fs";
import competitionService from "../services/competition-service.js";
import multer from "multer";
const Router = express.Router();
Router.get("/", async (req, res, next) => {
  const newsList = await competitionService.getAllCompetition();
  res.json(newsList);
});
Router.get("/get-competition-by-id/:id", async (req, res) => {
  const getById = await competitionService.getCompetitionById(req.params.id);
  res.json(getById);
});
//Router.post("/competition", async (req, res) => {
//const ret = await competitionService.add(req.body);

//});
// const upload = multer({ dest: "./public/images/competition" });
// const storage = multer.memoryStorage();
// const upload = multer(storage);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/competition');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });
const fields = [
  { name: "landscape_poster", maxCount: 3 },
  { name: "portrait_poster", maxCount: 3 },
  { name: "lookback_img", maxCount: 3 },
];
Router.post("/", upload.fields(fields), async (req, res, next) => {
  //data process
  const { name, status, lookback_script } = req.body;
  //image process
  const landscape_poster = req.files["landscape_poster"].map((file) => {
    let fileType = file.mimetype.split("/")[1];
    let imgName = file.filename + "." + fileType;
    fs.renameSync(
      `./public/images/competition/${file.filename}`,
      `./public/images/competition/${imgName}`
    );
    return imgName;
  });
  const portrait_poster = req.files["portrait_poster"].map((file) => {
    let fileType = file.mimetype.split("/")[1];
    let imgName = file.filename + "." + fileType;
    fs.renameSync(
      `./public/images/competition/${file.filename}`,
      `./public/images/competition/${imgName}`
    );
    return imgName;
  });
  const lookback_img = req.files["lookback_img"].map((file) => {
    let fileType = file.mimetype.split("/")[1];
    let imgName = file.filename + "." + fileType;
    fs.renameSync(
      `./public/images/competition/${file.filename}`,
      `./public/images/competition/${imgName}`
    );
    return imgName;
  });

  const addcompetition = await competitionService.addCompetition(
    name,
    status,
    landscape_poster,
    portrait_poster,
    lookback_script,
    lookback_img
  );
  if (addcompetition) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/delete-competition", async (req, res) => {
  const delcompetiton = await competitionService.removeCompiton(
    Object.keys(req.body)
  );
  if (delcompetiton) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/update-competition", upload.fields(fields), async (req, res) => {
  const {
    id,
    name,
    status,
    lookback_script,
    landscape_poster,
    portrait_poster,
    lookback_img,
  } = req.body;
  let imgName = "";
  let landscape_posters = "";
  let portrait_posters = "";
  let lookback_imgs = "";
  if (req.body.landscape_poster === undefined) {
    landscape_posters = req.files["landscape_poster"].map((file) => {
      let fileType = file.mimetype.split("/")[1];
      imgName = file.filename + "." + fileType;
      fs.renameSync(
        `./public/images/competition/${file.filename}`,
        `./public/images/competition/${imgName}`
      );
      return imgName;
    });
  }
  if (req.body.portrait_poster === undefined) {
    portrait_posters = req.files["portrait_poster"].map((file) => {
      let fileType = file.mimetype.split("/")[1];
      imgName = file.filename + "." + fileType;
      fs.renameSync(
        `./public/images/competition/${file.filename}`,
        `./public/images/competition/${imgName}`
      );
      return imgName;
    });
  }

  if (req.body.lookback_img === undefined) {
    lookback_imgs = req.files["lookback_img"].map((file) => {
      let fileType = file.mimetype.split("/")[1];
      imgName = file.filename + "." + fileType;
      fs.renameSync(
        `./public/images/competition/${file.filename}`,
        `./public/images/competition/${imgName}`
      );
      return imgName;
    });
  }
  const updatecompetition = await competitionService.updateCompetition(
    id,
    name,
    status,
    req.body.landscape_poster === undefined
      ? landscape_posters
      : landscape_poster,
    req.body.portrait_poster === undefined ? portrait_posters : portrait_poster,
    lookback_script,
    req.body.lookback_img === undefined ? lookback_imgs : lookback_img
  );
  if (updatecompetition) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});

export default Router;
