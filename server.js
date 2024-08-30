import http from "http"
import app from "./app.js";

const PORT = 5555

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});