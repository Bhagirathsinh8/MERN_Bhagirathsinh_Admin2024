const Service = require("../models/service-model");
const services = async (req,res) => {
try {
    const response = await Service.find();
    if(!response){
        return res.status(404).json({message: "No Services found"});
    }
    res.status(200).json({message: response});
} catch (error) {
    console.log("Services:",error);
}
}

module.exports = services;