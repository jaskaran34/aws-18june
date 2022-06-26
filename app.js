const express = require('express')
const path = require('path');

const app = express()

app.set('view engine','ejs');
//app.use(express.static(path.join(__dirname,'public')));



console.log(path.join(__dirname,'public'));
const userRouter = require('./routes/users.js');

app.use('/',userRouter);

app.listen(3000, () => {
   console.log('Server is up on port 3000.')
}) 