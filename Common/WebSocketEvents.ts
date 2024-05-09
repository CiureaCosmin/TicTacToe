interface ServerToClientEvents {
  playerMoved: (
    gameId: string,
    username: string,
    row: number,
    col: number
  ) => void;
}

interface ClientToServerEvents {
  sessionStart: (
    gameId: string,
    username: string,
    callback: (response: SessionStartResponse) => void
  ) => void;
  playerMove: (
    gameId: string,
    username: string,
    row: number,
    col: number
  ) => void;
}

interface SessionStartResponse {
  success: boolean;
  symbol: string;
}
export { ServerToClientEvents, ClientToServerEvents, SessionStartResponse };
