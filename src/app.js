import express from 'express'
import morgan from 'morgan'
import { createRoles } from './libs/initialSetup.js';
import dotenv from 'dotenv';
dotenv.config();



import cors from 'cors';
let corsOptions ={
  origin: '*',
};

let app= express();
app.disable('x-powered-by');
app.use(cors(corsOptions));
createRoles();
app.use(morgan("dev"));
app.use(express.json());


export default app;



