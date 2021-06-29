import express from 'express'
import mongoose from 'mongoose'
import { dbURI, port } from './config/enviroment.js'
import router from './config/router.js'

const app = express()


//* Start Server
const startServer = async () => {
  try {
    // Connecto to database
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🎇 Database connection is great success')

    app.use((req, _res, next) => {
      console.log(`📡 Incoming Request: METHOD: ${req.method}, URL: ${req.url}`)
      next()
    })
    
    app.use(express.json())
    app.use('/api', router)

    app.listen(port, () => console.log(`💸 Express is running on ${port}`))

  } catch (err) {
    console.log(`🤬 ${err}`)
  }
}

startServer()