/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { RoutePath } from '#config/routes'
const RegisterController = () => import('#controllers/auth/register_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const AuthenticateController = () => import('#controllers/auth/authenticate_controller')
const ProfilesController = () => import('#controllers/profiles_controller')

// Landing page
router.on('/').render('pages/home')

router.resource('profiles', ProfilesController).only(['index', 'show', 'update'])

// Authentication
router
  .group(() => {
    router
      .get(RoutePath.REGISTER, [RegisterController, 'show'])
      .as('register.show')
      .use(middleware.guest())
    router
      .post(RoutePath.REGISTER, [RegisterController, 'store'])
      .as('register.store')
      .use(middleware.guest())
    router
      .resource('authenticate', AuthenticateController)
      .only(['index', 'store', 'destroy'])
      .use('index', middleware.guest())
  })
  .as('auth')
