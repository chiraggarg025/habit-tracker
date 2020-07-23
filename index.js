// requiring express and creating port
const express = require('express');
const app = express();
const port= 8000;
// using router
app.use('/',require('./routes/index'));

// setting up view engine
app.set('view engine','ejs');
app.set('views','./views');





// port where server listens
app.listen(port,function(err){
    if(err){
        console.log(`Error in starting the server : ${err}`);
        return ;
    }
    console.log(`Server is running on port : ${port}`);
})


