import { Request, Response } from "express";
import {
  getCars,
  insertCar,
  getCar,
  updateCar,
  deleteCar,
} from "../services/items.services";
import { handleHtpp } from "../utils/error.handle";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    const data = response ? response : "NOT FOUND";
    res.send(data)
  } catch (error) {
    handleHtpp(res, "ERROR_ GET_ITEM");
  }
};
const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (error) {
    handleHtpp(res, "ERROR_ GET_ITEMS");
  }
};
const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateCar(id, body);
    res.send(response);
  } catch (e) {
    handleHtpp(res, "ERROR_ UPDATE_ITEM", e);
  }
};
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertCar(body);
    res.send(response);
  } catch (error) {
    handleHtpp(res, "ERROR_POST_ITEMS", error);
  }
};
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCar(id);
    res.send(response);
  } catch (error) {
    handleHtpp(res, "ERROR_ DELETE_ITEMS");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
