import mongoose from "mongoose"

//* Schema
const musicSchema = new mongoose.Schema({
  album: { type: String, required: true, unique: true },
  artist: { type: String, required: true },
  genre: { type: String, required: true },
  subGenre: { type: String },
  artwork: { type: String, required: true },
  releaseDay: { type: Number, required: true },
  releaseMonth: { type: Number, required: true },
  releaseYear: { type: Number, required: true },
  recorded: { type: String, required: true },
  trackListing: [{ type: String, required: true }],
  musicians: [{ type: String, required: true }],
  production: [{ type: String, required: true }],
  label: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true}
})

musicSchema.set('toJSON', {
  virtuals: true
})



//* Model
export default mongoose.model('Music', musicSchema)