


// ---------------------
//Home logic
// ---------------------

const home =  async(req,res)=>{
    try {
        res
            .status(200)
            .send('Hello Server from router!');
    } catch (error) {
        console.log(error);
    }
};




// ---------------------
//Register logic
// ---------------------

const register =  async (req,res)=>{
   try {
    console.log(req.body);
    res.status(200).send({Message : req.body});
   } catch (error) {
    console.log(error);
    res.status(400).send({Message : "Page Not Found!"});
   }
};


module.exports = {home,register};