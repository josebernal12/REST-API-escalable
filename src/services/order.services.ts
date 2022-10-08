import { Car } from "../interfaces/car.interfaces";
import ItemModel from "../models/items";

const getOrders = async (item: Car) => {
  const response = await ItemModel.create(item);
  return response;
};

export {getOrders}