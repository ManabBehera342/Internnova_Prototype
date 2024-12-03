import JWT from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization; //token is stored in header section as metadata
  //body is seen in front & header is behind the scene used for  server working seo
  if (!authHeader || authHeader.startsWith("Bearer")) {
    next("Auth failed");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET); //data is stored in payload
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    next("Authentication failed");
  }
};

export default userAuth;
