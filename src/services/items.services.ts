import { Car } from "../interfaces/car.interfaces"
import ItemModel from "../models/items"
const insertItem = async (item: Car) => {
    const response = await ItemModel.create(item)
    return response
}

export { insertItem }