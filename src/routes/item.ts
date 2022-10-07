import { Router } from 'express'
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/items'
const router = Router()


router.get('/', getItem)

router.get('/:id', getItems)

router.post('/', postItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)



export { router }