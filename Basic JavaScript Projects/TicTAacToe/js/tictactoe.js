
let activePlayer = 'X';

let selectedSquares = [];


function placeXOrO(squareNumber) {

    if (!selectedSquares.some(element => element.includes(squareNumber))) {

        let select = document.getElementById(squareNumber);


        if (activePlayer === 'X') {

            select.style.backgroundImage = 'url ("../images/x.png")';

        } else {

            select.style.backgroundImage = 'url ("../images/o.png")';
        }

        selectedSquares.push(squareNumber + activePlayer);

        checkWinConditions();

        if (activePlayer === 'X') {

            activePlayer = 'O';

        } else {
            activePlayer = 'X';
        }


        audio("./media/place.mp3");

        if(activePlayer === 'O') {

            disableClick();

            setTimeout(function () { computersTurn(); }, 1000);
        }

        return true;

    }


            function computersTurn() {

                let success = false;

                let pickASqaure;

                while (!success) {

                    pickASqaure = String(Math.floor(Math.random() * 9));

                    if (placeXOrO(pickASqaure)) {

                        placeXOrO(pickASqaure);

                        succes = true;
                    };
                }
            }

    

}
