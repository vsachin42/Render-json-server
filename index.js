const jsonServer = require("json-server");   // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleWares = jsonServer.defaults();
const port = process.env.port || 8080;  // choose port from here like 8080, 8000

server.use(middleWares);
server.use(router);

server.listen(port);