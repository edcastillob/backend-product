const express = require("express");
const router = require("./routes");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const server = express();

server.use(helmet());
server.use(cors());

server.use(bodyParser.json());
server.use(express.json());
server.use(router);

// const corsOptions = {
//   origin: "http://localhost:4200",
//   methods: "GET,HEAD,PUT,POST,DELETE",
//   allowedHeaders: "Content-Type,Authorization",
// };

// server.use(cors(corsOptions));

module.exports = server;
