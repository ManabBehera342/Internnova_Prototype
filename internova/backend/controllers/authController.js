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
  res.status(201).send({
    success: true,
    message: "User created Succesfully",
    user,
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
