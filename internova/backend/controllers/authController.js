import userModel from "../models/userModel.js";
import userSchema from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  /*  try { */
  const { name, email, password } = req.body;
  /*   validate */
  if (!name) {
    /* return res
        .status(400)
        .send({ success: false, message: "please provide name" });*/
    next("name is required");
  }
  if (!email) {
    /* return res
        .status(400)
        .send({ success: false, message: "please provide email" });*/
    next("email is required");
  }
  if (!password) {
    /* return res
        .status(400)
        .send({ success: false, message: "please provide password" }); */
    next("password is required and greater than 6 characters");
  }

  const existingUser = await userSchema.findOne({ email });
  if (existingUser) {
    /* return res.status(200).send({
        success: false,
        message: "Email is already in use, Please login",
      }); */

    next("Email already registered, Please login");
  }

  const user = await userSchema.create({
    name,
    email,
    password,
  });

  //token
  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "User created Succesfully",
    user: {
      //to get these details of user
      name: user.name,
      lastName: user.lastname,
      email: user.email,
      location: user.location,
    },
    token,
  });
  /*  } catch (error) {
    next(error); */
  /*  console.log(error);
    res.status(400).send({
      message: "Error in register controller",
      success: false,
      error,  
      }); */
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  //validation
  if (!email || !password) {
    next("Please Provide All Fields");
  }
  //find user by email
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    next("Invalid Username or password ");
  }

  //compare password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid userName or password");
  }
  user.password = undefined; //to hide password in user details display
  const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Login Successfully",
    user,
    token,
  });
};
