import express from "express";
import viewEngine from "../src/config/viewEngine";
import bodyParser from "body-parser";
import initRouteWeb from "../src/router/web";
import initRouteApi from "../src/router/api/userApi";
import initRouteApiAllcode from "./router/api/allcodes";
import initRouteDoctorApi from "./router/api/doctor";
import initRouteApiSpeciality from "./router/api/speciality";
import initRouteApiClinic from "./router/api/clinic";
import connectDB from "../src/config/connectDB";
import dotenv from "dotenv";
// import cors from 'cors'
dotenv.config();
const app = express();
const port = 8080;
// //using cors
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }
// app.use(cors(corsOptions));
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});
// config bodyParser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
    })
);
// connect database
connectDB();
// config viewEngine
viewEngine(app);
// init routerWeb
initRouteWeb(app);
// initRouteApi
initRouteApi(app);
initRouteApiAllcode(app);
initRouteDoctorApi(app);
initRouteApiSpeciality(app);
initRouteApiClinic(app);
// start server
app.listen(port, () => {
    console.log(`Server on:http://localhost:${port}`);
});
