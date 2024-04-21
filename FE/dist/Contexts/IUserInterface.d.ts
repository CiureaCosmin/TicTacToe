interface IUserInterface {
    name: string;
    symbol: string;
    gameId: string;
}
export declare class User implements IUserInterface {
    name: string;
    symbol: string;
    gameId: string;
    constructor();
    getResponse(): Promise<void>;
    private setGameId;
    setSymbol(symbol: string): void;
}
export {};
//# sourceMappingURL=IUserInterface.d.ts.map