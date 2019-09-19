const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000


var app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))

// app.get('/', function(request, response){
//   response.sendFile('calculator.html')
// });
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
