import { createServer } from "node:http";

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("¡Hola mundo desde Node.js " + process.version + "!\n");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

process.on("SIGTERM", () => server.close(() => process.exit(0)));
process.on("SIGINT", () => server.close(() => process.exit(0)));