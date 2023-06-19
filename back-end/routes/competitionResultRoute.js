import express from "express";
import competitionResultService from "../services/competitionResult-services.js";
import multer from "multer";
import fs from "fs";
const Router = express.Router();
Router.use("/public/images/competition-results", express.static("public/images/competition-results/"));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/competition-results');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });
Router.get("/", async (req, res, next) => {
    const pageSize = parseInt(req.query.pageSize) || 9;
    const page = parseInt(req.query.page) || 1;

    const skip = (page - 1) * pageSize;
    try {
        let result = await competitionResultService.getAll();
        if (req.query.competition_id) {
            result = result.filter((item) => item.competition_id == req.query.competition_id)
        }
        const total = result.length;
        result = result.slice(skip, skip + pageSize);

        res.json({ data: result, total: total });
    } catch (error) {
        console.log(error)
    }
});
const fields = [
    { name: "avt", maxCount: 2 },
    { name: "logo_team", maxCount: 2 },

];
Router.post("/", upload.fields(fields), async (req, res) => {
    const { competition_id, name, major, academic_year, team, rank, school, type } = req.body
    console.log('req.body', req.body)
    console.log(req.body.logo_team != 'undefined')
    const avt = req.body.avt != 'undefined' ? req.files["avt"].map((file) => {
        if (file) {
            let fileType = file.mimetype.split("/")[1];
            let imgName = file.filename + Date.now() + "." + fileType;
            fs.renameSync(
                `./public/images/competition-results/${file.filename}`,
                `./public/images/competition-results/${imgName}`
            );
            return imgName;
        }
    }) : undefined;
    const logo_team = req.body.logo_team != 'undefined' ? req.files["logo_team"].map((file) => {
        if (file) {
            let fileType = file.mimetype.split("/")[1];
            let imgName = file.filename + Date.now() + "." + fileType;
            fs.renameSync(
                `./public/images/competition-results/${file.filename}`,
                `./public/images/competition-results/${imgName}`
            );
            return imgName;
        }
    }) : undefined;
    const addcompetitionResult = await competitionResultService.addCompetitionResult(competition_id, name, major, academic_year, team, rank, school, type, avt, logo_team);
    if (addcompetitionResult) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});

Router.post("/delete", async (req, res) => {
    const delcompetitionResult = await competitionResultService.delCompetitionResult(Object.keys(req.body));
    if (delcompetitionResult) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/update", upload.fields(fields), async (req, res) => {
    const {
        id, name, major, academic_year, team, rank, school, logo_team, avt

    } = req.body;
    let imgName = "";
    let logo_teams = "";
    let avts = "";

    if (req.body.logo_team === undefined) {
        logo_teams = req.files["logo_team"].map((file) => {
            let fileType = file.mimetype.split("/")[1];
            imgName = file.filename + Date.now() + "." + fileType;
            fs.renameSync(
                `./public/images/competition-results/${file.filename}`,
                `./public/images/competition-results/${imgName}`
            );
            return imgName;
        });
    }
    if (req.body.avt === undefined) {
        avts = req.files["avt"].map((file) => {
            let fileType = file.mimetype.split("/")[1];
            imgName = file.filename + Date.now() + "." + fileType;
            fs.renameSync(
                `./public/images/competition-results/${file.filename}`,
                `./public/images/competition-results/${imgName}`
            );
            return imgName;
        });
    }

    const update = await competitionResultService.updateCompetitionResult(
        id,
        name, major, academic_year, team, rank, school,
        req.body.logo_team === undefined
            ? logo_teams
            : logo_team,
        req.body.avt === undefined ? avts : avt,

    );
    if (update) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});
Router.get("/getById/:id", async (req, res) => {
    try {
        const getById = await competitionResultService.getById(req.params.id);
        res.json(getById);
    } catch (error) {
        console.log(error)
    }
});
export default Router;
