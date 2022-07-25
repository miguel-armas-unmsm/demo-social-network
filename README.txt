Inicializar proyecto, creación de package.json:
$ npm init

Librerías:
$ npm i express // servidor express
$ npm i nanoid // generador de id
$ npm i body-parser // analizar body como json
$ npm i swagger-ui-express // swagger
$ npm i jsonwebtoken // jwt
$ npm i bcrypt // para encriptar contraseña
$ npm i mysql
$ npm i request // para conexión http
$ npm i -g pm2 // monitoreo de servicios

PM2
$ pm2 logs
$ pm2 status
$ pm2 start api/index.js
$ pm2 start api/index.js --name user-service // asignar un nombre
$ pm2 logs <index> // Ej. pm2 logs 0
$ pm2 stop <index> <index n> // Ej. pm2 stop 1 2
$ pm2 start <index> // previamente iniciado
$ pm2 restart <index>

serverless vercel
$ npm i -g now
$ now login
$ now // construir y deployar proyecto. Al hacer deploy si les sale inmediatamente un 404 al ingresar a la URL, es porque no tienen activado el “Directory Listing”. Para activarlo, basta con ir a los Project Settings, después ir a la opción de Advanced, y ahí dentro poner Enabled en el Directory Listing.

Ejecutar proyecto:
$ node api/index.js
$ nodemon api/index.js

VS Code Plugins:
- Bracket Pair Colorizer 2
- npm
- npm intellisense 
- ESLint
- Code Spell Checker
- Auto Close Tag
- DotENV
- Path intellisense
- MarkdownLint
- Material Icon Theme

Notas:
- El password no debe ir en el payload del cuerpo del jwt.
- Todas las passwords deben almacenarse cifradas.
- Las peticiones no deberían llegar a la lógica de negocio si no tiene permisos.
- Funciones anónimas complican el debug, funciones con nombres lo facilitan.
- next es un callback, cuando lo llamas pasa a la siguiente middleware en orden.

-./utils/error.js: Este se encarga de generar un nuevo error dentro de nuestra api. Ej: en registrar nuevo usuario si falta el parámetro username generamos un nuevo error con esta utilidad.

-./network/errors.js: Este es un middleware que se va a encargar de capturar todos los errores que hayamos generados en el api.
Al ser un middleware lo trabaja separado de lo que es la lógica del response, cada vez que se genera el error con throw error() debemos llamar a next() dentro del catch de la promesa para que el middleware maneje ese error.

manejo de errores - handle errors
https://levelup.gitconnected.com/how-to-handle-errors-in-an-express-and-node-js-app-cb4fe2907ed9

