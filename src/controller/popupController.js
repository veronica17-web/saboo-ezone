const { model } = require("mongoose");
const popModel = require("../models/popModel")
const PopModel = require("../models/popModel")

const isValidPhone = (Mobile) => {
    return /^[6-9]\d{9}$/.test(Mobile)
};
const views = async (req, res) => {
    try {
        let data = req.body
        let {number} = data
        //validating user phone
        if (!number) return res.status(400).send({ status: false, message: "User Phone number is required" });
        if (!isValidPhone(number.trim())) return res.status(400).send({ status: false, message: "Please Enter a valid Phone number" });

        var currentdate = new Date();
        var datetime = currentdate.getDay() + "/" + currentdate.getMonth()
            + "/" + currentdate.getFullYear()
        let time = + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        data.date = datetime
        data.time = time
        let getdataCount = await popModel.find().count()
        data.sno = getdataCount + 1
        let saveDate = await popModel.create(data)
        res.status(201).send({ status: true, data: saveDate })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}
module.exports = { views }