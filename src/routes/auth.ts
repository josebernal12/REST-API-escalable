import { Router } from 'express'
import { loginCtrl, registeCtrl } from '../controllers/auth'
const router = Router()

router.post('/register',registeCtrl )

router.post('/login', loginCtrl)





export { router }