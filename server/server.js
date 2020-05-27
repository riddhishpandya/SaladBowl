const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
const socketIO = require('socket.io');

const publicPath  = path.join(__dirname,'/../public');
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(cors());

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"../views"));

// Set static path
app.use(express.static(publicPath));

app.get('/', function(request, response) {
  response.render('index', {
    foo: 'bar'
  });
});

io.on('connection', (socket) => {
  console.log("A new user just connected");

  socket.on('disconnect', () => {
    console.log('A user was disconnected.');
  });
});


server.listen(8000, () => {
  console.log('App listening on port 8000!')
});
