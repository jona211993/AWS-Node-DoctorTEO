import express from 'express'
import morgan from 'morgan'
import { createRoles } from './libs/initialSetup';
require("dotenv").config();


const cors = require('cors');
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



