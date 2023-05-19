const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configurar el middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint para el registro de usuarios
app.post('/registro', (req, res) => {
  const usuario = req.body.usuario;
  const contrasena = req.body.contrasena;

  //lógica para almacenar los datos de usuario en una base de datos o archivo

  res.send('Registro exitoso');
});

// Endpoint para el inicio de sesión
app.post('/login', (req, res) => {
  const usuario = req.body.usuario;
  const contrasena = req.body.contrasena;

  //visualizar valores de usuario y contraseña en la consola de Node.js cuando envie una solicitud de inicio de sesion en postman

  console.log('Usuario:', usuario);
  console.log('Contraseña:', contrasena);

  //lógica para autenticar al usuario

  if (usuario === 'rossana' && contrasena === '1234a') {
    res.send('Autenticación exitosa');
  } else {
    res.status(401).send('Error en la autenticación');
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
