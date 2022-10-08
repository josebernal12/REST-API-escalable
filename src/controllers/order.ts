import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { handleHtpp } from "../utils/error.handle";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}
const getOrders = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "esto solo lo ve la gente con sesion",
      user: req.user,
    });
  } catch (error) {
    handleHtpp(res, "ERROR_ GET_ITEMS");
  }
};

export { getOrders };
