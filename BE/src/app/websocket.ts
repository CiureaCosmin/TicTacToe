import { createServer } from "http";
import { Server } from "socket.io";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import {
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
  SessionStartResponse,
} from "../../../Common/WebSocketEvents";

export class Websocket {
  private db: any;
  constructor() {
    this.createDatabase();
  }

  public setServer(app: any) {
    const server = createServer(app);
    const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
      cors: {
        origin: "*", // Allow all origins, replace "*" with your specific origin if needed
      },
    });
    io.on("connection", (socket) => {
      socket.on(
        "sessionStart",
        async (
          gameId: string,
          username: string,
          callback: (response: SessionStartResponse) => void
        ) => {
          const symbol = (await this.checkIfGameExists(gameId))
            ? "DEFAULT_0"
            : "DEFAULT_X";
          const response: SessionStartResponse = {
            success: true,
            symbol,
          };
          callback(response);
          if (await this.checkIfGameExists(gameId)) {
            this.db.run(
              "INSERT INTO sessions (gameId, user1, symbol1) VALUES (?, ?, ?)",
              [gameId, username, symbol]
            );
          } else {
            this.db.run(
              "UPDATE sessions SET user2 = ?, symbol2 = ? WHERE gameId = ?",
              [username, symbol, gameId]
            );
          }
        }
      );
      socket.on("playerMove", (gameId, username, row, col) => {
        console.log(
          `gameId: ${gameId}, username: ${username}, row: ${row}, col: ${col}`
        );
      });
    });
    return server;
  }

  async createDatabase() {
    this.db = await open({
      filename: "tictac.db",
      driver: sqlite3.Database,
    });
    await this.db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      gameId TEXT UNIQUE,
      user1 TEXT,
      user2 TEXT,
      symbol1 TEXT,
      symbol2 TEXT,
      winner TEXT
    );
  `);
  }
  async checkIfGameExists(gameId: string) {
    try {
      const result = await this.db.get(
        "SELECT * FROM sessions WHERE gameId = ?",
        [gameId]
      );
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error checking if game exists:", error);
      throw error; // Rethrow the error to handle it in the caller function
    }
  }
}
