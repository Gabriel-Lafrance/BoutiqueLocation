import express from "express";
import apiRouter from "./routes";

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(express.json());

app.use("/api/test", apiRouter );

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});