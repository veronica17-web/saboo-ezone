const express = require('express')
const router = express.Router()
const {register,} =require("../controller/userControllers")
const {views}=require("../controller/popupController")
router.get("/test-me", function (req, res) {
    res.send("this is successfully created");
  });

  router.post("/userRegister",register)
  router.post('/views',views)
module.exports = router 