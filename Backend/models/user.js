import mongoose from "mongoose"
import bcrypt from 'bcrypt'

//* User Template
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, maxLength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  albumID: { type: String }
})

userSchema
  .virtual('passwordConfirmation')
  .set(function(passwordCon){
    this._passwordConfirmation = passwordCon
  })

userSchema
  .pre('validate', function(next){
    if(this.isModified('password') && this.password !== this._passwordConfirmation){
      this.invalidate('passwordConfirmation', 'Password do not match')
    }
    next()
  })

userSchema
  .pre('save', function(next){
    if(this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

userSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

export default mongoose.model('User', userSchema)



