const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Desenvolvimento CRUD Alunos',
    description: 'O projeto consiste no desenvolvimento de um backend no formato CRUD para alunos utilizando node.js, Express e mongoDB.'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/studentRoutes.js'];

swaggerAutogen(outputFile, routes, doc).then(() => {
  require('./index.js'); 
});