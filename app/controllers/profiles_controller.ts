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
    const user = await ctx.auth.authenticate()
    return ctx.view.render('pages/profile', {
      username: ctx.params.id,
      bio: "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the man talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?",
      posts: [
        {
          date: DateTime.fromSeconds(1714109408).toLocaleString(DateTime.DATE_FULL),
          sourceDoc: [], //TODO: quilljs delta
          renderedHtml: `
<p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. </p>

<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends. </p>

<p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man. </p>`,
        },
        {
          date: DateTime.fromSeconds(1714109408).toLocaleString(DateTime.DATE_FULL),
          sourceDoc: [], //TODO: quilljs delta
          renderedHtml: `
<p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. </p>
`,
        },
        {
          date: DateTime.fromSeconds(1714109408).toLocaleString(DateTime.DATE_FULL),
          sourceDoc: [], //TODO: quilljs delta
          renderedHtml: `
<p>Well, the way they make shows is, they make one show. </p>
`,
        },
      ],
    })
  }

  /**
   * Handle form submission for setting the user's bio/description
   */
  async update(ctx: HttpContext) {}
}
