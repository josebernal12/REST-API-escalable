import { Car } from "../interfaces/car.interfaces";
import ItemModel from "../models/items";

const insertCar = async (item: Car) => {
  const response = await ItemModel.create(item);
  return response;
};
const getCars = async () => {
  const response = await ItemModel.find();
  return response;
};
const getCar = async (id: string) => {
  const response = await ItemModel.findById(id);
  return response;
};
const updateCar = async (id: string, data: Car) => {
  const response = await ItemModel.findByIdAndUpdate(id, data, { new: true });
  return response;
};
const deleteCar = async (id: string) => {
  const response = await ItemModel.findByIdAndDelete(id);
  return response;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
