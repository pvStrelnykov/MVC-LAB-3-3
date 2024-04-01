import express from 'express'

const PORT = 3000

const app = express()


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
      </body>
    </html>
  `)
})


app.listen(PORT, () => {
  console.log('Server has been started...');
})
