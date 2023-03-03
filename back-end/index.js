import _ from "./config/config.js";
import express from "express";
import cors from 'cors'

//Route
import authRoute from './routes/etNewsRoute.js'
import searchRoute from './routes/searchRoute.js'
import homeRoute from './routes/homeRoute.js'

const app = express();
app.use(cors());
app.use("/", homeRoute);
app.use("/news",authRoute);
app.use('/competition',searchRoute);

app.use((err,req,res, next)=> {
  console.log(err);
  next();
})
app.use((req,res)=>res.status(404).json({code:404, msg: "EROR"}))

app.listen(process.env.PORT, ()=>{
    console.log(`Server running at http://127.0.0.1:${process.env.PORT}`);
})


