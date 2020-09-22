import { Request, Response} from 'express';
import moment from 'moment';
import Authenticator from '../services/Authenticator';
import IdGenerator from '../services/IdGenerator';
import VideoDB from '../database/VideoDatabase';

export const CreateVideo = async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string;
        const title = req.body.title;
        const url = req.body.url;
        const description = req.body.description;

        if(!title || !description ){
            throw new Error('Missing Parameter ' + title + " " + description + " " + url);
        }

        const id =  IdGenerator.generate();

        const userId = Authenticator.getTokenData(token)
        const recipeToken = Authenticator.generateToken({id});

        const recipeDatabase = new VideoDB()
        await recipeDatabase.CreateVideo(id, title, description, moment().toString(), url, userId.id);

        res.status(200).send({
            message: "Video Created",
            recipeToken
        })


    }catch (e) {
        res.status(400).send({
            message: e.message
        })
    }
}