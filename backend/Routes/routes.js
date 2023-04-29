import express from "express";
import { getData, postData } from "../Controller/controller.js";

const Router = express.Router();

Router.get("/getData", getData);
Router.post("/postData", postData);
Router.get("/postData", (req, res) => {
    res.render("index");
})

export default Router;