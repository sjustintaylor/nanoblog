import { RoutePath } from '#config/routes'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProfilesController {
  /**
   * Display a list of resource
   */
  async index(ctx: HttpContext) {
    // If authenticated, take the user to their profile. Otherwise redirect to home
    if (ctx.auth.isAuthenticated) {
      const user = await ctx.auth.authenticate()
      return ctx.response.redirect(`${RoutePath.PROFILE}/${user.username}`)
    }
    return ctx.response.redirect(RoutePath.HOME)
  }

  /**
   * Show individual record
   */
  async show(ctx: HttpContext) {
    return ctx.view.render('pages/profile')
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}
}
