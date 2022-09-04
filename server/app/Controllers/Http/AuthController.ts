import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class AuthController {
  public async verifyLogin({ request, response, auth }: HttpContextContract){
    try {
        const {email, password} = request.body();
        const token = await auth.attempt(email, password);
        return response.status(200).json({
            token
        })
    } catch {
        return response.status(401).json({
            message: "Login ou senha invalidos"
        })
    }
  }
}
