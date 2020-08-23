const http = require('http');
const app = require('./app');
const morgan = require('morgan');

app.use(morgan('dev'));
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);