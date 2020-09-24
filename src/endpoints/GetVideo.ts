import { Request, Response } from 'express';
import VideoDB from '../database/VideoDatabase';
import Authenticator from '../services/Authenticator';

export const GetVideos = async (req: Request, res: Response) => {
    try {
        const videoDataBase = new VideoDB();
        const feed = await videoDataBase.GetVideos();

        res.status(200).send({
            feed
        })

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

    
}