import { RoutePath } from '#config/routes'
import Post from '#models/post'
import User from '#models/user'

import type { HttpContext } from '@adonisjs/core/http'
import sanitizeHtml from 'sanitize-html'

export default class ProfilesController {
  /**
   * Display a list of resource
   */
  async index(ctx: HttpContext) {
    // If authenticated, take the user to their profile. Otherwise redirect to home
    const user = await ctx.auth.authenticate()
    if (ctx.auth.isAuthenticated) {
      return ctx.response.redirect(`${RoutePath.PROFILE}/${user.username}`)
    }
    return ctx.response.redirect(RoutePath.HOME)
  }

  /**
   * Show individual record
   */
  async show(ctx: HttpContext) {
    await ctx.auth.check()

    const user = await User.findBy({ username: (ctx.params.id as string).toLowerCase() })

    if (!user) {
      return ctx.response.notFound()
    }

    const posts = await Post.query()
      .where('user_id', user.id)
      .whereNull('deleted_at')
      .orderBy('created_at', 'desc')

      .limit(25)

    return ctx.view.render('pages/profile', {
      username: ctx.params.id,
      bio: user.description,
      posts: posts.map((el) => ({ id: el.id, date: el.createdAt, renderedHtml: el.renderedHtml })),
    })
  }

  /**
   * Handle form submission for setting the user's bio/description
   */
  async update(ctx: HttpContext) {
    const user = await ctx.auth.authenticate()
    if (ctx.auth.isAuthenticated) {
      user.description = sanitizeHtml(ctx.request.body().bio)
      await user.save()

      return ctx.response.redirect(`${RoutePath.PROFILE}/${user.username}`)
    }

    return ctx.response.redirect(RoutePath.HOME)
  }
}
