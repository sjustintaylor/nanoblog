import { RoutePath } from '#config/routes'
import User from '#models/user'
import { registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async store({ request, response, auth }: HttpContext) {
    const { email, username, password } = await request.validateUsing(registerValidator)
    const user = await User.create({ email, username, password })

    await auth.use('web').login(user)

    return response.redirect().toPath(`${RoutePath.PROFILE}/${username}`)
  }
}
