import { Request, Response } from 'express'
import { insertItem } from '../services/items.services'
import { handleHtpp } from '../utils/error.handle'

const getItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHtpp(res, 'ERROR_ GET_ITEM')
    }
}
const getItems = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHtpp(res, 'ERROR_ GET_ITEMS')
    }
}
const updateItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHtpp(res, 'ERROR_ UPDATE_ITEM')
    }
}
const postItem = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertItem(body)
        res.send(response)
    } catch (error) {
        handleHtpp(res, 'ERROR_POST_ITEMS')
    }
}
const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHtpp(res, 'ERROR_ DELETE_ITEMS')
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem }