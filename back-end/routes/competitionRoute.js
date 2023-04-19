import express from "express";
import competitionService from "../services/competition-service.js";

const Router = express.Router();
Router.get("/competition", async (req, res, next) => {
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
Router.post("/", upload.single("img"), async (req, res, next) => {
    //data process
    const name = req.body.name;
    const status = req.body.status;
    const stt = req.body.stt;
    //image process
    let fileType = req.file.mimetype.split("/")[1];
    let imgName = req.file.filename + "." + fileType;
    fs.rename(
        `./public/images/competition/${req.file.filename}`,
        `./public/images/competition/${imgName}`,
        function (err) {
            if (err) {
                console.error(err);
                return res.status(500).send("Error uploading file");
            }
        }
    );

    const addcompetition = await competitionService.addCompetition(id, name, status, landscape_poster, portrait_poster, lookback_script, lookbach_img);
    if (addcompetition) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/delete-competition", async (req, res) => {
    const delcompetiton = await competitionService.removeCompiton(Object.keys(req.body));
    if (delcompetiton) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/update-competition", async (req, res) => {
    const { id, name, status, landscape_poster, portrait_poster, lookback_script, lookbach_img } = req.body;
    const updatecompetition = await competitionService.updateCompetition(id, name, status, landscape_poster, portrait_poster, lookback_script,lookbach_img);
    if (updatecompetition) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});

export default Router;
