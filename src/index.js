import app from './app.js'
import './database.js'

import mongoose from 'mongoose';

app.set("port", process.env.PORT);

//Servidor Escuchando

app.listen(app.get('port'), () => {
  console.log("Servidor en el puerto ", app.get('port'));
});