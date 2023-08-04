import fastify from "fastify";
import dotenv from "dotenv";
import sensible from "@fastify/sensible";
import { PrismaClient } from "@prisma/client";
dotenv.config();

const app = fastify();
app.register(sensible)
const prisma = new PrismaClient();

app.get("/posts", async(req, res) => {
  return await commitToDB (prisma.post.findMany({
    select: {
      id: true,
      title: true
    }
  }))
})

async function commitToDB(promise) {
  const [error, data] = await app.to(promise);

  if(error) return app.httpErrors.internalServerError(error.message);
  return data;
}

app.listen({
  port: process.env.PORT
}, () => {
  console.log("Server Started at PORT 3001")
});