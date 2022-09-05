import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import News from 'App/Models/News';

export default class NewsController {
    public async store({ request, response }: HttpContextContract){
      try {
        const body = request.body();
        if (body){
          await News.create(body);
          return response.status(200).json({
            message: "Notícia inserida com sucesso",
            error: false
          })
        }else{
          return response.status(400).json({
            message: "É necessário inserir informações válidas",
            error: true
          })
        }
      } catch (error) {
        console.log(error);
      }
    }
}
