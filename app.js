const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
const imageRoutes = require('./api/routes/image');
app.use('/image',imageRoutes);

app.use((req,res,next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error)
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message : error.message
        }
    })
})
module.exports = app;