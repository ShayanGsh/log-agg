import fastify from "fastify";
import { printLog } from "./controller";

const server = fastify();

server.post("/log", printLog);

server.listen({ host:"0.0.0.0", port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
