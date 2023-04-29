import model from "../Model/model.js";

export const getData = async (req, res) => {
    res.status(200);
    const data = await model.find({});
    res.json(data);
}

export const postData = async (req, res) => {
    const data = req.body;
    const allDataSend = await model(data);

    allDataSend.save();
    console.log(allDataSend);
    res.redirect("/postData");
}