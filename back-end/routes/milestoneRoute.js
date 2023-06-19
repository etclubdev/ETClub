import express from "express";
import milestoneService from "../services/milestone-services.js";

const Router = express.Router();
Router.get("/", async (req, res, next) => {
    const pageSize = parseInt(req.query.pageSize) || 9;
    const page = parseInt(req.query.page) || 1;

    const skip = (page - 1) * pageSize;
    console.log(req.query.competition_id)
    try {
        let result = await milestoneService.getAllMilestone();
        const total = result.length;
        result = result.slice(skip, skip + pageSize);
        if (req.query.competition_id) {
            result = result.filter((item) => item.competition_id == req.query.competition_id)
        }
        res.json({ data: result, total: total });
    } catch (error) {
        console.log(error)
    }

});
Router.post("/", async (req, res) => {
    const { competition_id, name, start_date, end_date } = req.body
    console.log(req.body)
    try {
        const addmilestone = await milestoneService.addMilestone(competition_id, name, start_date, end_date);
        if (addmilestone)
            res.json({ code: 200, msg: "OK" });
    } catch (error) {
        console.log(error)
        res.json({ code: 404, msg: error });
    }


});
Router.post("/delete", async (req, res) => {
    const delmilestone = await milestoneService.delMilestone(Object.keys(req.body));
    if (delmilestone) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});
Router.post("/update", async (req, res) => {
    const { id, name, start_date, end_date } = req.body;
    const updatemilestone = await milestoneService.updateMilestone(id, name, start_date, end_date);
    if (updatemilestone) res.json({ code: 200, msg: "OK" });
    else res.json({ code: 404, msg: "ERROR" });
});
Router.get("/getById/:id", async (req, res) => {
    const getById = await milestoneService.getByMilestoneId(req.params.id);
    res.json(getById);
});
export default Router;
