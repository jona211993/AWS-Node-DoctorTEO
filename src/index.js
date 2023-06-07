import app from './app'
import './database'

const mongosse = require('mongoose');

app.set("port", process.env.PORT);

//Servidor Escuchando

app.listen(app.get('port'), () => {
  console.log("Servidor en el puerto ", app.get('port'));
});