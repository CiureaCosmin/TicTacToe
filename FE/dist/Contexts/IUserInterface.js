import { v4 as uuidv4 } from 'uuid';
export class User {
    constructor() {
        this.name = '';
        this.symbol = '';
        this.gameId = '';
        this.getResponse();
    }
    async getResponse() {
        this.setGameId();
        try {
            const response = await fetch('http://localhost:5000/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: this.gameId }),
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const responseText = await response.json();
            this.setSymbol(responseText.symbol);
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    setGameId() {
        //check first if there is a gameId in the url
        const urlParams = new URLSearchParams(window.location.search);
        const gameId = urlParams.get('gameId');
        if (gameId) {
            this.gameId = gameId;
            return;
        }
        this.gameId = uuidv4();
        window.history.pushState({}, '', `?gameId=${this.gameId}`);
    }
    setSymbol(symbol) {
        this.symbol = symbol;
    }
}
//# sourceMappingURL=IUserInterface.js.map