import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users';

export default class UsersController {
  public async registerUser({ request, response }: HttpContextContract ){
    try {
      const body = request.body();
      if (body){
        await Users.create(body);
        return response.status(200).json({
          error: false,
          message: "Usuário cadastrado com sucesso"
        })
      }
    } catch (error) {
      console.error('Erro: -> ', error);
    }
  }
}
