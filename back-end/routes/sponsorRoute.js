import express from "express";
import sponsorService from "../services/sponsor-services.js";
import multer from "multer";
import fs from "fs";
const Router = express.Router();

Router.get("/", async (req, res, next) => {
  const newsList = await sponsorService.getAllsponsor();
  res.json(newsList);
});
Router.use("/public/images/sponsor", express.static("public/images/sponsor/"));
const upload = multer({ dest: "./public/images/sponsor" });
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
