export class SessionStorage {
  private static setItem(key: string, value: string) {
    window.sessionStorage.setItem(key, value);
  }
  private static getItem(key: string) {
    return window.sessionStorage.getItem(key);
  }
  static setUsername(username: string) {
    this.setItem('username', username);
  }
  static getUsername() {
    return this.getItem('username');
  }
  static setGameId(gameId: string) {
    this.setItem('gameId', gameId);
  }
  static getGameId() {
    return this.getItem('gameId');
  }
  static setUserSymbol(symbol: string) {
    this.setItem('symbol', symbol);
  }
  static getUserSymbol() {
    return this.getItem('symbol');
  }
}
