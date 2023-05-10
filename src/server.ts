import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import helmet from 'helmet';
import fileUpload from 'express-fileupload';

import image from './resources/image/router'

const app = express();

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(helmet());

app.use(fileUpload());
app.use(express.static('uploads'))

app.use('/api/image', image);

export const start = async () => {
    try {
        app.listen(3000, () => {
            console.log('listing on http://localhost:3000/')
        })
    } catch (e) {
        console.error(e)
    }
}