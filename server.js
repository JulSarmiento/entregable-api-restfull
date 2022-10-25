require('dotenv').config();
const app = require('./app');
const errorHandler = require('./src/middlewares/errorHandler');
const notFoundErrorHandler = require('./src/middlewares/notFoundErrorHandler');

const PORT = process.env.PORT || 3001;

app.use(errorHandler);
app.use(notFoundErrorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server up and running in port: ${PORT}`)
});
 
server.on('error', error => console.error(error));