import { FastifyReply, FastifyRequest } from "fastify";

export function printLog(req: FastifyRequest, reply: FastifyReply) {
    console.log(req.body);
    reply.send("Success")
}