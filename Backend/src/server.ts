import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
require("dotenv").config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}));
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
