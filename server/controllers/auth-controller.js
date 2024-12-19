const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// ---------------------
//Home logic
// ---------------------

const home = async (req, res) => {
  try {
    res.status(200).send("Hello Server from router!");
  } catch (error) {
    console.log(error);
  }
};

// ---------------------
//Register logic
// ---------------------

const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, phone, work, password } = req.body;

    if (!username || !email || !phone || !password || !work) {
      return res.status(400).send({ message: "Please provide all fields" });
    }

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).send({ message: "User already exists" });
    }
    //hash passward
    //  const saltRound = 10;
    //  const hashedPassword = await bcrypt.hash(password, saltRound);

    //create new user
    const userCreated = await User.create({
      username,
      email,
      phone,
      work,
      password, //:hashedPassword
    });
    res
      .status(201)
      .json({
        message: "Requested user created successfully",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({ Message: "Page Not Found!" });
  }
};

// ---------------------
//Login logic
// ---------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).send({ message: "User not found" });
    }
    //method-1 for compareing password
    // const isPassword = await bcrypt.compare(password,userExist.password);

    // method-2 for compareing password using function and functiion define in model/schema of user
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        message: "Login successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      return res.status(401).send({ message: "Invalid Password" });
    }
  } catch (error) {
    // res.status(500).json("Internal Server Error")
    next(error);
  }
};

module.exports = { home, register, login };
