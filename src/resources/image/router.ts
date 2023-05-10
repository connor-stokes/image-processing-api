import { Router } from 'express'
import { uploadImage } from './controller'

const router = Router()

router
    .route('/')
    .post(uploadImage)

export default router