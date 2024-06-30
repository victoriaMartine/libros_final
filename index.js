import express from 'express'
import * as dotenv from 'dotenv';
import morgan from 'morgan'
import { PORT } from './src/config/config.js';
import router from './src/routes/router.js';
dotenv.config();

const app = express();

//Middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'))

app.use(router)
app.listen(PORT, ()=>{
    console.log(` listening at port http://localhost:${PORT}`);
})