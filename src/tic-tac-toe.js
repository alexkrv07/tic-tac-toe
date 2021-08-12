class TicTacToe {
    winner = null;
    player1 = 'x';
    player2 = 'o';
    movesPlayer1 = [];
    movesPlayer2 = [];
    tableWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    turns = 9;
    constructor() {
        this.currentPlayerSymbol = this.player1;
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.isFinished()) {
            return;
        }
        if (this.gameField[rowIndex][columnIndex] === null) {
            this.gameField[rowIndex][columnIndex] = this.currentPlayerSymbol;
            const currentPlayer = this.choosePlayer();
            this.addMoves(currentPlayer, rowIndex, columnIndex);
            this.setWinner(currentPlayer);
            this.changePlayer();
            this.turns--;
        }
    }

    isFinished() {
        return !!this.winner || this.isDraw();
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.turns <= 0;
    }

    isDraw() {
        return this.noMoreTurns() && !this.winner;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }

    changePlayer() {
        if (this.currentPlayerSymbol === this.player1) {
            this.currentPlayerSymbol = this.player2;
        } else {
            this.currentPlayerSymbol = this.player1;
        }
    }

    addMoves(player, rowIndex, columnIndex) {
        const rows = 3;
        player.push(rows * rowIndex + columnIndex);
    }

    choosePlayer() {
        if (this.currentPlayerSymbol === this.player1) {
            return this.movesPlayer1;
        } else {
            return this.movesPlayer2;
        }
    }

    setWinner(player) {
        const minLength = 3;

        if (player.length < minLength) {
            return;
        }

        this.tableWins.forEach((win) => {
            let numberWinnerItem = 0;

            win.forEach((winItem) => {
                if (player.includes(winItem)) {
                    numberWinnerItem += 1;
                }
            });

            if (numberWinnerItem === win.length) {
                this.winner = this.currentPlayerSymbol;
            }
        }); 
    }

}

module.exports = TicTacToe;
// let game;

// game = new TicTacToe();
// console.log(game.getCurrentPlayerSymbol(), 'x');
// game.nextTurn(0, 1);
// console.log(game.getCurrentPlayerSymbol(), 'o');
// game.nextTurn(1, 2);
// console.log(game.getCurrentPlayerSymbol(), 'x');
// game.nextTurn(0, 2);
// console.log(game.getCurrentPlayerSymbol(), 'o');
// game.nextTurn(0, 0)
// console.log(game.getCurrentPlayerSymbol(), 'x');
// game.nextTurn(1, 1)
// console.log(game.getCurrentPlayerSymbol(), 'o');
// game.nextTurn(0, 0)
// console.log(game.getCurrentPlayerSymbol(), 'o');
// game.nextTurn(1, 1)
// console.log(game.getCurrentPlayerSymbol(), 'o');
// game.nextTurn(2, 1);
// console.log(game.getCurrentPlayerSymbol(), 'x');
// game.nextTurn(0, 1);
// console.log(game.getCurrentPlayerSymbol(), 'x');
// game.nextTurn(2, 1);
// console.log(game.getCurrentPlayerSymbol(), 'x');
// game.nextTurn(0, 1);
// console.log(game.getCurrentPlayerSymbol(), 'x');
// game.nextTurn(2, 1);
// console.log(game.getCurrentPlayerSymbol(), 'x');
// game.nextTurn(0, 1);
// console.log(game.getCurrentPlayerSymbol(), 'x');
// game.nextTurn(1, 1)
// console.log(game.getCurrentPlayerSymbol(), 'x');
// game.nextTurn(2, 0)
// console.log(game.getCurrentPlayerSymbol(), 'o');
// game.nextTurn(2, 0)
// console.log(game.movesPlayer1, game.movesPlayer2);