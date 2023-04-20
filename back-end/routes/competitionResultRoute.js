import express from "express";
import competitionResultService from "../services/competitionResult-services.js";

const Router = express.Router();
Router.get("/", async (req, res, next) => {
    const newsList = await competitionResultService.getAll();
    res.json(newsList);
});
Router.post("/add-competitionresult", async (req, res) => {

    const addcompetitionResult = await competitionResultService.addCompetitionResult(id, competition_id, name, major, academic_year, team, rank);
    if (addcompetitionResult) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/delete-competitionresult", async (req, res) => {
    const delcompetitionResult = await competitionResultService.delCompetitionResult(Object.keys(req.body));
    if (delcompetitionResult) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/update-competitionresult", async (req, res) => {
    const { id, competition_id, name, major, academic_year, team, rank } = req.body;
    const updatecompetitionResult = await competitionResultService.updateCompetitionResult(id, competition_id, name, major, academic_year, team, rank);
    if (updatecompetitionResult) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});
Router.get("/get-competitionresult-by-id/:id", async (req, res) => {
    const getById = await competitionResultService.getById(req.params.id);
    res.json(getById);
});
export default Router;
