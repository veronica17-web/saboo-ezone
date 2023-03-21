const express = require('express')
const router = express.Router()
const {register,} =require("../controller/userControllers")
const {views}=require("../controller/popupController")
const {createEnquries}=require("../controller/enquiryFormController")
router.get("/test-me", function (req, res) {
    res.send("this is successfully created");
  });

  router.post("/userRegister",register)
  router.post('/views',views)
  router.post("/createEnquries",createEnquries)
module.exports = router 