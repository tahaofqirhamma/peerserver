require("dotenv").config();

const { ExpressPeerServer } = require("peer");
const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const PORT = process.env.PORT || 9000;

// Enable CORS for all routes
app.use(cors());

const server = http.createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/',
  allow_discovery: true,
});

// Use PeerJS server with CORS
app.use("/peerjs", cors(), peerServer);

server.listen(PORT, () => {
  console.log(`PeerJS server running on port ${PORT}`);
});
