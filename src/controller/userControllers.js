const userModel = require("../models/userModel")
const {isValid,isMobileNumber,isValidEmail, isValidPincode, checkPassword, checkname, checkISBN, checkDate,  isRating,}=require("../validation/validation")

const register = async (req,res)=>{
    try {
        let data = req.body
    // let {Email,Name,JobTittle,Company,Interest,SubscribeNews} =data
    if (Object.keys(data).length == 0) {
        return res.status(400).send({
          status: false,
          message: "require data to create user",
        });
      }
    let input = ["email","name","jobTittle","subscribeNews","interest"]
for(field of input){
    if (!data.hasOwnProperty(field)) {
      return res.status(400).send(`${field} is required in request body to create user`);
        
      }
      if(field=="email"){
        if (!isValidEmail(data[field])) {
          return  res.status(400).send(`${field} format is invalid`);
          
        }
        let checkEmail = await userModel.findOne({ email: data.email });
        if (checkEmail) {
          return   res.status(400).send("email is already exist");
        }
      }
      if(field=="interest"){
        let InterestFeilds = ["AfterSales/Parts", "Customer-Private", "Customer-Public", "Enthusiast", "investor", "Local authority", "Media", "Policy maker", "Recruitment", "Supplier", "Other"]
        if (!InterestFeilds.includes(data.interest)) {
          return   res.status(400).send(`interest must be present among ${InterestFeilds.join(", ")}`);
        }
      }
}
 let saveDate = await userModel.create(data)
 res.status(201).send({status:true,Data:saveDate})
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
    
}
 
 
module.exports = {register}