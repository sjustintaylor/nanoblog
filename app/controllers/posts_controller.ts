import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
