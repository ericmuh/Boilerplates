"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
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
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get("/api/hello", (req, res) => {
    res.json(languages);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
