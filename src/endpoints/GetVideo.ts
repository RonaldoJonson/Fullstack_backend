import { Request, Response } from 'express';
import VideoDB from '../database/VideoDatabase';
import Authenticator from '../services/Authenticator';

export const GetVideos = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;

        const recipeDataBase = new VideoDB();
        const feed = await recipeDataBase.GetVideos(id);

        res.status(200).send({
            id: feed.id,
            name: feed.name,
            description: feed.description,
            createdAt: feed.created_at
        })

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

    
}