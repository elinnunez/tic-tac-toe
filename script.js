"use strict";

const Player = ((sign) => {
    this.sign = sign;

    const getSign = () => {
        return this.sign;
    }

    return {getSign};
})();

const gameBoard = (() => {
    const _board =  new Array(9);

    const reset = () => {
        for(let i = 0; i < _board.length; i++) {
            _board[i] = "";
        };
    };

    return {reset}

})();

const displayController = (() => {

})();