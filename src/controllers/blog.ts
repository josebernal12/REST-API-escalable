import { Request, Response } from 'express'
import { handleHtpp } from '../utils/error.handle'

const getItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHtpp(res, 'ERROR_ GET_BLOG')
    }
}
const getItems = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHtpp(res, 'ERROR_ GET_BLOGS')
    }
}
const updateItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHtpp(res, 'ERROR_ UPDATE_BLOG')
    }
}
const postItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHtpp(res, 'ERROR_POST_BLOGS')
    }
}
const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (error) {
        handleHtpp(res, 'ERROR_ DELETE_BLOGS')
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem }