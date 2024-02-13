const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const cors = require("cors");                               // Allows cross-origin requests. Secure comms

const server = express();

server.use(morgan("dev"));
server.use(express.json());                                 // parse json reqs
server.use(cors());

server.use(routes);




module.exports = server;
