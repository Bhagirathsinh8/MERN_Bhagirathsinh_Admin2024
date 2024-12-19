const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userScema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique:true
  },
  phone: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,

  },
  
  isAdmin:{
    type: Boolean,
    default: false,
    required: true,
  }
});

//hash the password
userScema.pre('save',async function (){
console.log("pre Method", this);
const user = this;

if(!user.isModified('password')){
  next();
}
try {
  const saltRound = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(user.password, saltRound);
 user.password = hashedPassword;
} catch (error) {
  next(error);
}
})

//JSON Web Token
//Never Store in Database Only in Cookie and local storage
userScema.methods.generateToken = function(){
try {
  return jwt.sign({ //payload
    userId : this._id.toString(),
    email : this._email,
    isAdmin : this.isAdmin
},
//secret key
process.env.JWT_KEY,
  { expiresIn : '1h' },
);
} catch (error) {
  console.error(error);
}
}

//compare Passsword
userScema.methods.comparePassword = async function(password){
 return bcrypt.compare(password, this.password);
}

//define model and collection name
const User = mongoose.model('USER',userScema);

 
module.exports = User;