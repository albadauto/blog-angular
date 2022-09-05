import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';

export default class AuthController {
  public async verifyLogin({ request, response, auth }: HttpContextContract){
    try {
        const {email, password} = request.body();
        const token = await auth.attempt(email, password);
        const [ { id } ] = await Database.from("users").select("id").where("email", email);
        return response.status(200).json({
            token,
            id
        })
    } catch(err){
        if (err) return console.log(err)
        return response.status(401).json({
            message: "Login ou senha invalidos"
        })
    }
  }
}
