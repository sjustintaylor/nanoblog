import { RoutePath } from '#config/routes'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

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
    // TODO: fetch user record
    return ctx.view.render('pages/profile', {
      username: ctx.params.id,
      bio: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the man talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
      posts: [
        {
          date: DateTime.fromSeconds(1714109408).toLocaleString(DateTime.DATE_FULL),
          contents: [
            "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
            "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
            "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
          ],
        },
        {
          date: DateTime.fromSeconds(1714149008).toLocaleString(DateTime.DATE_FULL),
          contents: ["Your bones don't break, mine do."],
        },
        {
          date: DateTime.fromSeconds(1714192208).toLocaleString(DateTime.DATE_FULL),
          contents: [
            "We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
          ],
        },
      ],
    })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}
}
