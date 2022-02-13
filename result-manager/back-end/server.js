const app = require('./app');
const dotenv = require('dotenv');

const connectDB = require('./config/database');
 
//Setting config env
dotenv.config({path : 'back-end/config/config.env'});    

//connecting to db
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server started on localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})