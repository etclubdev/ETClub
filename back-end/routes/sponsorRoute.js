import express from "express";
import sponsorService from "../services/sponsor-services.js";
import multer from "multer";
import fs from "fs";
const Router = express.Router();

// enum kind of sponsor
// 0 = All
// 1 = diamond_sponsors
// 2 = gold_sponsors
// 3 = sliver_sponsors
// 4 = brozen_sponsors
// 5 = media_sponsors
// 6 = marketing_sponsors
Router.get("/", async (req, res, next) => {
  const pageSize = parseInt(req.query.pageSize) || 10;
  const page = parseInt(req.query.page) || 1;

  const skip = (page - 1) * pageSize;
  try {
    let result = await sponsorService.getAllsponsor();
    const total = result.length;
    result = result.slice(skip, skip + pageSize);
    if (req.query.competition_id) {
      result = result.filter((item) => {
        return item.competition_id == req.query.competition_id;
      });

    }
    res.json({ data: result, total: total });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Lỗi server');
  }

});

Router.use("/public/images/sponsor", express.static("public/images/sponsor/"));

// const upload = multer({ dest: "./public/images/sponsor" });
// const storage = multer.memoryStorage();
// const upload = multer(storage);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/sponsor');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });
Router.post("/", upload.single("logo"), async (req, res, next) => {
  //data process
  console.log("check sponsor", req.body);
  const { name, logo, kind, competition_id } = req.body;
  //image process
  let fileType = req.file.mimetype.split("/")[1];
  let imgName = req.file.filename + "." + fileType;
  fs.rename(
    `./public/images/sponsor/${req.file.filename}`,
    `./public/images/sponsor/${imgName}`,
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send("Error uploading file");
      }
    }
  );

  const addSponsor = await sponsorService.addSponsor(
    name,
    imgName,
    kind,
    competition_id
  );
  if (addSponsor) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/delete-sponsor", async (req, res) => {
  const delSponsor = await sponsorService.delSponsor(Object.keys(req.body));
  if (delSponsor) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/update-sponsor", upload.single("logo"), async (req, res) => {
  //image process
  let imgName = "";
  if (req.body.logo === undefined) {
    let fileType = req.file.mimetype.split("/")[1];
    imgName = req.file.filename + "." + fileType;
    fs.rename(
      `./public/images/sponsor/${req.file.filename}`,
      `./public/images/sponsor/${imgName}`,
      function (err) {
        if (err) {
          console.error(err);
          return res.status(500).send("Error uploading file");
        }
      }
    );
  }

  const { name, logo, kind, id } = req.body;
  const updateSponsor = await sponsorService.updateSponsor(
    id,
    name,
    req.body.logo === undefined ? imgName : logo,
    kind
  );
  if (updateSponsor) res.json({ code: 200, msg: "OK" });
  else res.json({ code: 404, msg: "ERROR" });
});
Router.get("/get-sponsor-by-id/:id", async (req, res) => {
  const getById = await sponsorService.getBySponsorId(req.params.id);
  res.json(getById);
});
export default Router;
