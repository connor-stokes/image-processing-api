import { Request, Response } from 'express'
import { UploadedFile } from "express-fileupload";
import { v4 as uuidv4 } from 'uuid';
import Jimp from 'jimp';

export const uploadImage = async (req: Request, res: Response) => {
    try {
        if (!req.files?.image) return res.sendStatus(400);

        // TODO: figure why this type isn't working
        const image = req.files.image as UploadedFile;

        const image_id = uuidv4()
        const path = `./uploads/${image_id}.${image.mimetype.split('/')[1]}`

        await image.mv(path);

        const uploaded_image = await Jimp.read(path)

        await uploaded_image.writeAsync(`./uploads/${image_id}.jpg`)


        return res.status(201).json({ "image_id": image_id })
    } catch (e) {
        console.error(e)
        return res.status(500).send(e)
    }
}