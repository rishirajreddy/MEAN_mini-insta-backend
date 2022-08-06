const app = require("./index");
// const debug = require("debug")("node-angular");
const http = require("http").Server(app);

const io = require("socket.io")

const socket = io(http);

const normalizePort = val => {
    var port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
};

const onError = error => {
    if (error.syscall !== "listen") {
      throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  };
  
  const onListening = () => {
    const addr = server.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    // debug("Listening on " + bind);
    console.log("Listening on"+ bind);
  };

  const port = normalizePort(process.env.PORT || "3000");
  app.set("port", port);

// const server = http.createServer(app);
// server.on("error", onError);
// server.on("listening", onListening);
// server.listen(port);

socket.on("connection", (socket) => {
    console.log("user connected");
})

http.listen("3000", () => {
    console.log("Conncted to port 3000");
})