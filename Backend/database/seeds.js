import mongoose from 'mongoose'
import { dbURI } from '../config/enviroment.js'
import Music from '../models/music.js'
import musicSeeds from './data/musicSeeds.js'
import userSeed from './data/userSeed.js'
import User from '../models/user.js'

const seedDatabase = async () => {
  try {
    // Connect to database
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 DB connected in seeds')

    // Drop current Database
    await mongoose.connection.db.dropDatabase()
    console.log('🚮 Database Dropped!')

    const user = await User.create(userSeed)

    //* Create showData with added owner field
    const musicWithUsers = musicSeeds.map(ite => {
      return {...ite, owner: userSeed[0]._id}
    })

    // Add Music Seeds Data
    const music = await Music.create(musicWithUsers)
    console.log(`💿 Seeds are in, ${music.length} albums added & ${user.length} users have been added. 🌱 `)

    // Close connection
    await mongoose.connection.close()
    console.log(`👋 connection closed, bye`)
  } catch (err) {
    console.log(err)
  }
}

seedDatabase()
