const Mongoose = require('mongoose')

const Student = Mongoose.model('Student', {
  name: String,
  age: Number,
  ra: String,
  cpf: String,
  createdAt: String,
  updatedAt: String,
})

module.exports = Student