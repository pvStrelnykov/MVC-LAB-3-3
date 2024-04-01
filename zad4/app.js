import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const PORT = 3000

const app = express()

const __dirname = path.resolve()
let students = []


app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  const date = new Date().toLocaleString()
  console.log(`Request ${req.method} on path ${req.url} ${date}`)
  next()
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/zad4/views/home.html')
})

app.get('/student', (req, res) => {
  res.sendFile(__dirname + '/zad4/views/student.html')
})

app.get('/add-student', (req, res) => {
  res.sendFile(__dirname + '/zad4/views/add-student.html')
})

app.post('/add-student', (req, res) => {
  const { firstName, lastName, major } = req.body

  students.push({firstName, lastName, major})

  res.send(`Hello, ${firstName} ${lastName} on ${major} studies!`)
})

app.get('/students', (req, res) => {
  let list = `
    <ul>
      ${students.map(student => `<li><p>${student.firstName} ${student.lastName} - ${student.major}</p></li>`).join('')}
    </ul>
  `
  res.send(list)
})


app.listen(PORT, () => {
  console.log('Server has been started...')
})
