import express from "express";
import milestoneService from "../services/milestone-services.js";

const Router = express.Router();
Router.get("/", async (req, res, next) => {
    const newsList = await milestoneService.getAll();
    res.json(newsList);
});
Router.post("/add-milestone", async (req, res) => {
    const addmilestone = await milestoneService.addMilestone(id, competition_id, name, start_date, end_date);
    if (addmilestone) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/delete-banner", async (req, res) => {
    const delmilestone = await milestoneService.delMilestone(Object.keys(req.body));
    if (delmilestone) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/update-banner", async (req, res) => {
    const { id, competition_id, name, start_date, end_date} = req.body;
    const updatemilestone = await milestoneService.updateMilestone(id, competition_id, name, start_date, end_date);
    if (updatemilestone) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});
Router.get("/get-banner-by-id/:stt", async (req, res) => {
    const getById = await milestoneService.getById(req.params.stt);
    res.json(getById);
});
export default Router;
