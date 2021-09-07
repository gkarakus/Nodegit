const http = require("http");
const WebSocketServer = require("WebSocket")

const httpserver = http.createServer((req, res) =>{ 

    console.log("we have server");
})

httpserver.listen(8080, () => console.log("my server listening "))