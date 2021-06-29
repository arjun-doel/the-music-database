import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.js'
import { getAllMusic, addAlbum, showAlbum, editAlbum, deleteAlbum } from '../controllers/inputCtrl.js'
import { secureRoute } from './secretRouter.js'
const router = express.Router()

router.route('/music')
  .get(getAllMusic)
  .post(secureRoute, addAlbum)

router.route('/music/:id')
  .get(showAlbum)
  .put(secureRoute, editAlbum)
  .delete(secureRoute, deleteAlbum)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

  export default router