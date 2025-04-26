import { RoutePath } from '#config/routes'
import User from '#models/user'
import { loginValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthenticateController {
  async index({ view }: HttpContext) {
    return view.render('pages/auth/sign_in')
  }
  async store({ request, response, auth }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return response.redirect().toPath(`${RoutePath.PROFILE}/${user.username}`)
  }
  async destroy({ response, auth }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect().toPath(RoutePath.HOME)
  }
}
