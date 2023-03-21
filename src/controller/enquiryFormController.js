const enquiryFormModel = require("../models/enquiryFormModel")
const {isValidEmail,isValid}=require("../validation/validation")
const createEnquries = async (req,res)=>{
    try {
        let data = req.body
//let {fullname,email,message}= data
if (Object.keys(data).length == 0) {
    return res.status(400).send({
      status: false,
      message: "require data to create user",
    });
  }

let input = ["fullname","email","message"]
for(field of input){
    if (!data.hasOwnProperty(field)) {
      return res.status(400).send(`${field} is required in request body to create user`);
        
      }
      if (!isValid(data[field])) {
        return res.status(400).send({status:true,message:`invalid input ${field}` })
      }
      if(field=="email"){
        if (!isValidEmail(data[field].trim())) {
          return  res.status(400).send(`${field} format is invalid`);
          
        }
        let checkEmail = await enquiryFormModel.findOne({ email: data.email });
        if (checkEmail) {
          return   res.status(400).send("email is already exist");
        }
      }
     
      
}
let saveDate = await enquiryFormModel.create(data)
res.status(201).send({status:true,data:saveDate})
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}
module.exports = {createEnquries}