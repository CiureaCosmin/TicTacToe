import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Websocket } from "./websocket";

dotenv.config();

const app = express();
app.use(cors()); // Enable CORS for all routes

const websocket = new Websocket();
const server = websocket.setServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`App running on portt ${PORT}`);
});
