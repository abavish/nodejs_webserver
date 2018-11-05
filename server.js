const express = require('express')

//making a new express app
var app = express()

app.use(express.static(__dirname + '/public'))
//setting up http route handlers
//route handler for a get request to a url(root)
app.get('/', (req, res) => {
  // res.send('<h1>Hey Express! - response from server</h1>')
  res.send({
    name: 'Vishal',
    likes: [
      'Cars',
      'Nature'
    ]
  })
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error handling the request.'
  })
})
//binding an application to a port on our machine
app.listen(3000, () => {
  console.log('Server is ready on port 3000');
})
