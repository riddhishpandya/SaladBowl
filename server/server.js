const express = require('express')
const cors = require('cors')
const path = require('path')

const publicPath  = path.join(__dirname,'/../public')
const app = express();

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

app.listen(8000, () => {
  console.log('App listening on port 8000!')
});
