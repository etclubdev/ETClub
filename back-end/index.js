import _ from "./config/config.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import fs from "fs";
import db from "../back-end/utils/db.js";

//Route
import authRoute from "./routes/etNewsRoute.js";
import competitionRoute from "./routes/competitionRoute.js";
import homeRoute from "./routes/homeRoute.js";
import bannerRoute from "./routes/bannerRoute.js";
import sponsorRoute from "./routes/sponsorRoute.js";
import feelingRoute from "./routes/feelingRoute.js";
import competitionResultRoute from './routes/competitionResultRoute.js'
import milestoneRoute from './routes/milestoneRoute.js';
import routerImages from './routes/upload.js';
import routerBanners from './routes/banner.routes.js';
import routerCompetitions from './routes/competition.routes.js';
import routerEtNews from './routes/et-news.routes.js';
import routerFeelings from './routes/feeling.routes.js';
import routerCompetitionResults from './routes/competition-result.routes.js';
import routerSponsors from './routes/sponsor.routes.js';
import routerMilestones from './routes/milestone.routes.js';
import routerMembers from './routes/member.routes.js';
import routerTerms from './routes/term.routes.js';
import routerUsers from './routes/user.routes.js';
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/public", express.static("public/"));

app.use(
  bodyParser.urlencoded({
    limit: "100mb",
    extended: true,
  })
);
app.use(bodyParser.json({ limit: "100mb" }));

// app.use("/", homeRoute);
// app.use("/news", authRoute);
// app.use("/competition", competitionRoute);
// app.use("/banner", bannerRoute);
// app.use("/sponsor", sponsorRoute);
// app.use("/feeling", feelingRoute);
// app.use('/competition-result', competitionResultRoute);
// app.use('/milestone', milestoneRoute);
app.use('/upload-images', routerImages)
app.use('/banner', routerBanners)
app.use('/competition', routerCompetitions)
app.use("/et-news", routerEtNews);
app.use('/feeling', routerFeelings);
app.use('/competition-result', routerCompetitionResults)
app.use('/sponsor', routerSponsors)
app.use('/milestone', routerMilestones)
app.use('/member', routerMembers)
app.use('/term', routerTerms)
app.use('/user', routerUsers)
app.use((err, req, res, next) => {

  console.log(err);
  next();
});
app.use((req, res) => res.status(404).json({ code: 404, msg: "EROR" }));

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://127.0.0.1:${process.env.PORT}`);
});
