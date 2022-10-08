import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}
const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtUser = req.headers.authorization || "";
    const jwt = jwtUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`);
    if (!isUser) {
      res.status(401);
      res.send(" NO TIENES UN JWT VALIDO");
    } else {
      req.user = isUser;
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("SESION, NO VALIDA");
  }
};

export { checkJwt };
