import { rest } from "lodash"
import User from "../models/user.js"

//*Create function to return profile info
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id).populate('createdShows')
    if(!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return rest.status(404).json({message: 'Not Found'})
  }
}
