require('dotenv').config()
const express = require('express')
const Mongoose = require('mongoose')
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

const studentRoutes = require('./routes/studentRoutes')

app.use('/student', (studentRoutes))

app.get('/', (req, res) => {
  res.json({ message: 'Oi Express!' })
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

Mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@node-js-cluster-0.g5iof1o.mongodb.net/CRUD_Alunos?retryWrites=true&w=majority&appName=Node-js-Cluster-0`
)
.then(() => {
  console.log("Conectamos ao MongoBD!")
  app.listen(3000)
})
.catch((err) => console.log(err))
