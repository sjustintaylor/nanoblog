import type { HttpContext } from '@adonisjs/core/http'

// TODO don't forget to check word/character count WITHOUT html markup included
export default class PostsController {
  /**
   * Handle form submission for the create action
   */
  async store(ctx: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update(ctx: HttpContext) {}

  /**
   * Delete record
   */
  async destroy(ctx: HttpContext) {}
}
