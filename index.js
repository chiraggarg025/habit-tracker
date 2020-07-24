// requiring express and creating port
const express = require('express');
const app = express();
const port= 8000;
const expressLayout = require('express-ejs-layouts');
// set view engine
app.set('view engine','ejs');
app.set('views','./views');
// extract style and scripts from subpages to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//Use router
app.use(express.static('./assets'));
app.use(expressLayout);
// require mongoose
const db = require('./config/mongoose');
// using router
app.use('/',require('./routes/index'));

// port where server listens
app.listen(port,function(err){
    if(err){
        console.log(`Error in starting the server : ${err}`);
        return ;
    }
    console.log(`Server is running on port : ${port}`);
})


