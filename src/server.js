const express= require('express');
const env= require("dotenv")
const app=express();
const bodyParser= require('body-parser');
const mongoose=require('mongoose');


//routes
const userRoutes=require('./routes/user');

//middlewares
app.use(bodyParser());
app.use('/api',userRoutes)

// setting env varibales
env.config()

//mongodb+srv://root:<password>@cluster0.qhkh1.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.qhkh1.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`, 
    {useNewUrlParser: true, //The underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser.
     useUnifiedTopology:true, //  to make Mongoose's default index build use createIndex() instead of ensureIndex() to avoid deprecation warnings from the MongoDB driver.
     useCreateIndex:true
    }).then(()=>{
        console.log("Database connected")
    });








app.listen(process.env.PORT,()=>{
    console.log("server running at port 2000")
})