import express from 'express'
import bodyParser from 'body-parser'

const PORT = 3000

const app = express()

let students = []


app.use(bodyParser.urlencoded({ extended: false }))

app.get('/home', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <p>HOME</p>
      </body>
    </html>
  `)
})

app.get('/student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Student</title>
      </head>
      <body>
        <p>STUDENT</p>
      </body>
    </html>
  `)
})

app.get('/add-student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Add-Student</title>
      </head>
      <body>
        <p>ADD-STUDENT</p>
        <br><br>
        <form action="/add-student" method="post">
          <input type="text" name="firstName" placeholder="Name"><br><br>
          <input type="text" name="lastName" placeholder="Lastname"><br><br>
          <input type="text" name="major" placeholder="Major"><br><br>
          <button type="submit">Add student</button>
        </form>
      </body>
    </html>
  `)
})

app.post('/add-student', (req, res) => {
  const { firstName, lastName, major } = req.body;

  students.push({firstName, lastName, major})

  res.send(`Hello, ${firstName} ${lastName} on ${major} studies!`)
});

app.get('/students', (req, res) => {
  let list = `
    <ul>
      ${students.map(student => `<li><p>${student.firstName} ${student.lastName} - ${student.major}</p></li>`).join('')}
    </ul>
  `
  res.send(list)
})


app.listen(PORT, () => {
  console.log('Server has been started...');
})
