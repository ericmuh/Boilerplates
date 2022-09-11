import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
require("dotenv").config();

const languages = [
  { language: "Spanish", greeting: "hola" },
  { language: "French", greeting: "bonjour" },
  { language: "German", greeting: "guten tag" },
  { language: "Italian", greeting: "salve" },
  { language: "Chinese", greeting: "nǐn hǎo" },
  { language: "Portuguese", greeting: "olá" },
  { language: "Arabic", greeting: "asalaam alaikum" },
  { language: "Japanese", greeting: "konnichiwa" },
  { language: "Korean", greeting: "anyoung haseyo" },
  { language: "Russian", greeting: "Zdravstvuyte" },
];
const app: Express = express();
const port = process.env.PORT;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/api/hello", (req, res) => {
  return res.json(languages);
});
app.post("/api/send", (req, res) => {
  languages.push(req.body);
  const language = { language: req.body.language, greeting: req.body.greeting };
  console.log(language);
  return res.json("Language added");
});
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
