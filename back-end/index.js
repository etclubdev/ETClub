import _ from "./config/config.js";
import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

//Route
import authRoute from "./routes/etNewsRoute.js";
import competitionRoute from "./routes/competitionRoute.js";
import homeRoute from "./routes/homeRoute.js";
import bannerRoute from "./routes/bannerRoute.js";
const app = express();
app.use(bodyParser.urlencoded({
  limit: '100mb',
  extended: true,
}));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(cors());
app.use("/", homeRoute);
app.use("/news", authRoute);
app.use("/competition", competitionRoute);
app.use("/banner", bannerRoute);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});
app.use((req, res) => res.status(404).json({ code: 404, msg: "EROR" }));

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://127.0.0.1:${process.env.PORT}`);
});
