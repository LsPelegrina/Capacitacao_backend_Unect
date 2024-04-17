const router = require('express').Router()
const { default: mongoose, Mongoose } = require('mongoose');
const Student = require('../models/Student')
const moment = require('moment');

router.post('/', async (req, res) => {
  const {name, age, ra, cpf, createdAt, updatedAt} = req.body

  if(!name){
    res.status(422).json({error: 'O nome é obrigatório'})
    return
  }

  if(!ra){
    res.status(422).json({error: 'O ra é obrigatório'})
    return
  }

  if(!cpf){
    res.status(422).json({error: 'O cpf é obrigatório'})
    return
  }

  const student = {
    name,
    age,
    ra,
    cpf,
    createdAt,
    updatedAt
  }
  student.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
  student.updatedAt = moment().format('MMMM Do YYYY, h:mm:ss a');
  try{
    await Student.create(student)
    res.status(201).json({message: 'Aluno inserido no sistema com sucesso!'})
  } catch (error) {
    res.status(500).json({error: error})
  }
})

//

router.get('/', async (req, res) => {

  const { query } = req;
  const filter = {};
  if (query.ra) {
    filter.ra = query.ra;
  }
  if (query.name) {
    filter.name = { $regex: new RegExp(query.name, 'i') };
  }

  try {
    const students = await Student.find(filter)

    res.status(200).json(students)
  } catch(error) {
    res.status(500).json({error: error})
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const student = await Student.findOne({_id: id})
    if(!student) {
      res.status(422).json({ message: 'O aluno não foi encontrado!'})
      return
    }
    res.status(200).json(student)
  } catch(error) {
    res.status(500).json({error: error})
  }
})

//
router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const {name, age, ra, cpf, updatedAt} = req.body
  const student = {
    name,
    age,
    ra,
    cpf,
    updatedAt
  }

  try {
    student.updatedAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    const updateStudent = await Student.updateOne({_id: id}, student)
    if(updateStudent.matchedCount === 0) {
      res.status(422).json({ message: 'O aluno não foi encontrado!'})
      return
    } 
    res.status(200).json(student)
  } catch(error) {
    res.status(500).json({error: error})
  }
})

//
router.delete('/:id', async (req, res) => {
  const id = req.params.id

  const student = await Student.findOne({_id: id})
  if(!student) {
    res.status(422).json({ message: 'O aluno não foi encontrado!'})
    return
  }
    
  try {
    await Student.deleteOne({_id: id})
    res.status(200).json({message: 'O aluno foi removido com sucesso!'})
  } catch(error) {
    res.status(500).json({error: error})
  }
})


module.exports = router