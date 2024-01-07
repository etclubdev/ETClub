import express from "express";
import fs from "fs";
import competitionService from "../services/competition-service.js";
import multer from "multer";
const Router = express.Router();
Router.get("/", async (req, res, next) => {
  
  let newsList = await competitionService.getAllCompetition();
  const status = req.query.status;
  const pageSize = parseInt(req.query.pageSize) || 9;
  const page = parseInt(req.query.page) || 1;

  const skip = (page - 1) * pageSize;
  if (status) {
    newsList = newsList.filter((item) => {
      return item.status == (status == 1 ? 'Sắp diễn ra' : status == 2 ? 'Đang diễn ra' : 'Đã diễn ra');
    });
  }
  const total = newsList.length;
  newsList = newsList.slice(skip, skip + pageSize);

  res.json({ data: newsList, total: total });
});
Router.get("/get-competition-by-id/:id", async (req, res) => {
  try {

    if (
      !isNaN(Number(req.params.id))
    ) {
      const getById = await competitionService.getCompetitionById(req.params.id);
      res.json(getById);
    } else {
      res.json('nodata')
    }

  } catch (error) {
    console.log(error)
  }
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
  // { name: "lookback_img", maxCount: 3 },
];
Router.post("/", upload.fields(fields), async (req, res, next) => {
  //data process
  const { name, status, lookback_script, content } = req.body;
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
  // const lookback_img = req.files["lookback_img"].map((file) => {
  //   let fileType = file.mimetype.split("/")[1];
  //   let imgName = file.filename + "." + fileType;
  //   fs.renameSync(
  //     `./public/images/competition/${file.filename}`,
  //     `./public/images/competition/${imgName}`
  //   );
  //   return imgName;
  // });

  const addcompetition = await competitionService.addCompetition(
    name,
    status,
    landscape_poster,
    portrait_poster,
    lookback_script,
    content
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
    landscape_poster,
    portrait_poster,
    lookback_script,
    content

  } = req.body;
  let imgName = "";
  let landscape_posters = "";
  let portrait_posters = "";

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

  const updatecompetition = await competitionService.updateCompetition(
    id,
    name,
    status,
    req.body.landscape_poster === undefined
      ? landscape_posters
      : landscape_poster,
    req.body.portrait_poster === undefined ? portrait_posters : portrait_poster,
    lookback_script,
    content
  );
  if (updatecompetition) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});

export default Router;
