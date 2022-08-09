import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(
      token,
      process.env.JWT_SECRET || "thisisabigsecret",
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: "Invalid Token"})
        } else {
          next();
        }
      }
    )
  } else {
    res.status(401).send({ message: "No Token" });
  }
}