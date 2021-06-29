import Music from "../models/music.js"

//* Index Router - Get All Music
export const getAllMusic = async (_req, res) => {
  const music = await Music.find()
  return res.status(200).json(music)
}

//* Post Album
export const addAlbum = async (req, res) => {
  try {
    const addAlbum = await Music.create(req.body)
    return res.status(201).json(addAlbum)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

//*Show Album
export const showAlbum = async (req, res) => {
  try {
    const { id } = req.params
    const album = await Music.findById(id)
    if (!album) throw new Error()
    return res.status(202).json(album)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'not found', 'message2': err })
  }
}


//* Delete Album
export const deleteAlbum = async (req, res) => {
  const { id } = req.params
  try {
    const showToDelete = await Music.findOneAndDelete({ _id: id })
    if (!showToDelete) throw new Error()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'not found' })
  }
}



//* Edit Album
export const editAlbum = async (req, res) => {
  const { id } = req.params 
  try {
    const updateAlbum = await Music.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
    if (!updateAlbum) throw new Error()
    return res.status(200).json(updateAlbum)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'not found' })
  }
}