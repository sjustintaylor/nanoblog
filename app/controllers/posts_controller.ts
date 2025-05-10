import { RoutePath } from '#config/routes'
import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'

// TODO don't forget to check word/character count WITHOUT html markup included
export default class PostsController {
  /**
   * Render the form to create a new post.
   *
   * Not needed if you are creating an API server.
   */
  async create(ctx: HttpContext) {
    const user = await ctx.auth.authenticate()
    return ctx.view.render('pages/edit_post', {
      username: user.username,
    })
  }

  /**
   * Handle form submission to create a new post
   */
  async store(ctx: HttpContext) {}

  /**
   * Render the form to edit an existing post by its id.
   *
   * Not needed if you are creating an API server.
   */
  async edit(ctx: HttpContext) {
    const user = await ctx.auth.authenticate()
    const post = await Post.findBy({ id: ctx.params.id, user_id: user.id })
    if (!post) {
      return ctx.response.redirect(`${RoutePath.PROFILE}/${user.username}`)
    }
    return ctx.view.render('pages/edit_post', {
      username: user.username,
      post: {
        id: post.id,
        date: post.createdAt,
        renderedHtml: post.renderedHtml,
        delta: post.delta,
      },
    })
  }

  /**
   * Handle the form submission to update a specific post by id
   */
  async update(ctx: HttpContext) {}

  /**
   * Delete record
   */
  async destroy(ctx: HttpContext) {}
}
