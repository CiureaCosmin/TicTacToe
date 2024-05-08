import {v4 as uuidv4} from 'uuid';
import {SessionStorage} from './SessionStorage';
import {socket} from './WebSocketService';
import {SessionStartResponse} from '../../../Common/WebSocketEvents';

interface IUserInterface {
  username: string;
  symbol: string;
  gameId: string;
}
export class User implements IUserInterface {
  username!: string;
  symbol!: string;
  gameId!: string;

  constructor() {
    this.checkForGameId();
    this.getSessionState();
  }

  // Check if the user has a gameId in the URL or sessionStorage and set it
  checkForGameId() {
    const gameId =
      this.checkURLForGameId() || this.checkSessionStorageForGameId();
    this.setGameId(gameId || this.generateUUID());
  }

  generateUUID() {
    return uuidv4();
  }

  setGameId(gameId: string) {
    this.gameId = gameId;
    SessionStorage.setGameId(this.gameId);
  }

  checkSessionStorageForGameId() {
    const sessionId = SessionStorage.getGameId();
    return sessionId ? sessionId : null;
  }

  checkURLForGameId() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('gameId');
    if (gameId) {
      window.history.pushState({}, document.title, window.location.pathname);
      return gameId;
    }
    return null;
  }

  setSymbol(symbol: string) {
    this.symbol = symbol;
    SessionStorage.setUserSymbol(symbol);
  }

  public setUsername(username: string) {
    this.username = username;
    SessionStorage.setUsername(username);
  }

  getSessionState() {
    const username = SessionStorage.getUsername();
    const symbol = SessionStorage.getUserSymbol();
    if (symbol) {
      this.setSymbol(symbol);
    }
    if (username) {
      this.setUsername(username);
    }
  }
  getGameId() {
    return this.gameId;
  }

  startSession() {
    socket.emit(
      'sessionStart',
      this.gameId,
      this.username,
      (response: SessionStartResponse) => {
        if (response.success) {
          this.setSymbol(response.symbol);
        }
      }
    );
    socket.on('playerMoved', (row: number, col: number) => {
      console.log(`Player moved to row: ${row}, col: ${col}`);
    });
  }
  playerMove(row: number, col: number) {
    socket.emit('playerMove', this.gameId, this.username, row, col);
  }
}
