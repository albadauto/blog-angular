import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import News from 'App/Models/News';

export default class NewsController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const body = request.body();
      if (body) {
        await News.create(body);
        return response.status(200).json({
          message: 'Notícia inserida com sucesso',
          error: false,
        });
      } else {
        return response.status(400).json({
          message: 'É necessário inserir informações válidas',
          error: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async index({ response }: HttpContextContract) {
    try {
      const searched = await Database.from('news')
        .join('users', 'users.id', '=', 'news.fk_id_user')
        .select('news.*')
        .select('users.email')
        .orderBy('id', 'desc')

        if(searched){
          return response.status(200).json({
            searched,
            error:false
          });
        }else{
          return response.status(400).json({
            message:"Nenhum registro de noticia foi encontrado",
            error:true
          })
        }
    } catch (error) {
      console.log(error);
    }
  }
}
