import express, { response } from "express";
import basicInfomation from "../services/basicInfomation-services.js";
const Router = express.Router();

Router.get("/", async (req, res, next) => {
  //const listInfo = await basicInfomation.getAllInfomation();
  //res.json(listInfo);
  res.send("da vao server");
});

export default Router;
