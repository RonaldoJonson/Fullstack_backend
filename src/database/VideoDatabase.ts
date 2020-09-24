import { Console } from 'console';
import BaseDB from './BaseDatabase';

export default class VideoDB extends BaseDB{

    static TABLE_NAME: string = 'Video_Youtube';

    public async CreateVideo (id:string, title:string, description:string, created_at: string, videoURL: string, owner_id: string) :Promise<void>{
        await this.getConnection()
        .insert({
            id,
            title,
            description,
            created_at,
            videoURL,
            owner_id
        }).into(VideoDB.TABLE_NAME)
    }

    public async GetVideos () :Promise<any>{
        const result = await this.getConnection()
        .select('*')
        .from(VideoDB.TABLE_NAME)

        return result;
    }
}