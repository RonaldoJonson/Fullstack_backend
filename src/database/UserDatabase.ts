import BaseDatabase from './BaseDatabase';
import moment from 'moment' 
import FollowDB from './FollowDatabase';
import RecipeDB from './RecipeDatabase';

export default class UserDB extends BaseDatabase
{
  private static TABLE_NAME: string = 'User_Cookenu';

  public async createUser (id: string, name: string, email: string, password: string) :Promise<void>{
      await this.getConnection()
      .insert({
          id,
          name,
          email,
          password
      }).into(UserDB.TABLE_NAME)
  }

  public async getUserByEmail (email: string) :Promise<any>{
      const result = await this.getConnection()
      .select('*')
      .from(UserDB.TABLE_NAME)
      .where({
          email
      });

      return result[0];
  }
  
  public async getUserById (id: string) :Promise<any>{
      const result = await this.getConnection()
      .select('*')
      .from(UserDB.TABLE_NAME)
      .where({
          id
      });

      return result[0];
  }
}