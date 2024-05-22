/*** Index Page ***/

// dropdown box functionality
function openDropdownInstructions()
{
    const dropdownInstructions = document.getElementById('dropdownInstructions');

    // if dropdown is displayed, hide arrow icon and show x mark
    const arrow = document.getElementsByClassName('fa-angle-down')[0];
    const xmark = document.getElementsByClassName('fa-xmark')[0];

    if(dropdownInstructions.style.display === "block")
    {
        dropdownInstructions.style.display = "none";
        arrow.style.display = 'inline-block';
        xmark.style.display = 'none';
    } else
    {
        dropdownInstructions.style.display = "block";
        arrow.style.display = 'none';
        xmark.style.display = 'inline-block';
    }
}

function openDropdownFaq()
{
    const dropdownFaq = document.getElementById('dropdownFaq');

    // if dropdown is displayed, hide arrow icon and show x mark
    const arrow = document.getElementsByClassName('fa-angle-down')[1];
    const xmark = document.getElementsByClassName('fa-xmark')[1];

    if(dropdownFaq.style.display === "block")
    {
        dropdownFaq.style.display = "none";
        arrow.style.display = 'inline-block';
        xmark.style.display = 'none';
    } else
    {
        dropdownFaq.style.display = "block";
        arrow.style.display = 'none';
        xmark.style.display = 'inline-block';
    }
}


// modal functionality | MDN Documentation followed for below code
const introModal = document.getElementById("introModal");
const gameModal = document.getElementById("gameModal");
const openGameButton = document.getElementById("openGame");

gameModal.style.display = "none"; // set default game modal style, hidden

// once 'let's play' button is clicked, hide intro modal and open game modal
openGameButton.addEventListener("click", () =>
{
    introModal.style.display = "none";
    gameModal.style.display = "inline-block";
});


/*** Game Page ***/
/* Code inspiration source: Ania Kubow tutorial */
const domLoaded = "DOMContentLoaded";

// add event listener to the domLoaded variable so when HTML file is read and loaded, executes function
document.addEventListener(domLoaded, () =>
{
    const grid = document.querySelector('.grid');

    const scoreDisplayed = document.getElementById('score');
    let gameoverScoreDisplayed = document.getElementById('gameover-score');
    let score = 0;

    const width = 8;
    const squares = []; // empty array to store new created divs added into a grid

    // array with objects
    const runnerObjects =
    [
        'url(assets/images/donut.png)',
        'url(assets/images/sun.png)',
        'url(assets/images/sneakers.png)',
        'url(assets/images/phone.png)',
        'url(assets/images/watch.png)',
        'url(assets/images/water.png)',
    ];

    // 1. create game board: a 8x8 grid of div elements with the class 'grid'
    function createBoard()
    {
        for(let i = 0; i < width * width; i++) //loop over 64 times
        {
            const square = document.createElement('div'); // create new div
            square.setAttribute('draggable', true); // make square draggable
            square.setAttribute('id', i); // give id to each square

            //console.log(square);

            let randomObject = Math.floor(Math.random() * runnerObjects.length); // assign random full integer
            square.style.backgroundImage = runnerObjects[randomObject];// passing a number to array
            grid.appendChild(square); // put square into a div with class of grid
            squares.push(square); // push square into array
        }
    }

    createBoard();


    // 2. function to drag objects
    // objects variables
    let objectBeingDragged;
    let objectBeingReplaced;
    let squareIdBeingDragged;
    let squareIdBeingReplaced;

    // add in built event listeners to each square element and functions to be called after
    squares.forEach(square => square.addEventListener('dragstart', dragStart));
    squares.forEach(square => square.addEventListener('dragend', dragEnd));
    squares.forEach(square => square.addEventListener('dragover', dragOver));
    squares.forEach(square => square.addEventListener('dragenter', dragEnter));
    squares.forEach(square => square.addEventListener('dragleave', dragLeave));
    squares.forEach(square => square.addEventListener('drop', dragDrop));

    // select dragged object's color and square's id integer
    function dragStart()
    {
        objectBeingDragged = this.style.backgroundImage; // store color dragged into a variable

        squareIdBeingDragged = parseInt(this.id); // assign square dragged id to this square id integer
    }

    // prevent default action when object is moved
    function dragOver(e)
    {
        e.preventDefault();
    }

    // prevent default action when object is placed
    function dragEnter(e)
    {
        e.preventDefault();
    }

    // place back an object to original place when object is left
    function dragLeave()
    {

    }

    // give selected square being dragged other color when object is dropped
    function dragDrop()
    {
        objectBeingReplaced = this.style.backgroundImage; // store color
        squareIdBeingReplaced = parseInt(this.id); // assign this square id integer to variable
        this.style.backgroundImage = objectBeingDragged; // change square color into color being dragged
        squares[squareIdBeingDragged].style.backgroundImage = objectBeingReplaced; // add square color into the array
    }

    // handle the ending of the drag
    function dragEnd()
    {
        // define array that contains squares' IDs where the dragged object can be moved
        let validMoves = [
            squareIdBeingDragged -1,
            squareIdBeingDragged -width,
            squareIdBeingDragged +1,
            squareIdBeingDragged +width,
        ];

        let validMove = validMoves.includes(squareIdBeingReplaced);

        // check if square ID is included in validMoves
        if(squareIdBeingReplaced && validMove)
        {
            squareIdBeingReplaced = null; // reset ID to null
        } else if (squareIdBeingReplaced && !validMove)
        {
            squares[squareIdBeingReplaced].style.backgroundImage = objectBeingReplaced; // restore color to original
            squares[squareIdBeingDragged].style.backgroundImage = objectBeingDragged; // set initial square to original color
        } else
        {
            squares[squareIdBeingDragged].style.backgroundImage = objectBeingDragged; // set color back to initial square
        }
    }
    

    // 4. function to drop objects after a match found
    function moveDown()
    {
        let i;

        for(i = 0; i <= 55; i++) // check squares below each index for an empty square
        {
            // if first row contains an empty square, needs to be filled with a colored one until first row is not empty
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
            const isFirstRow = firstRow.includes(i);

            if(isFirstRow && squares[i].style.backgroundImage === '')
                {
                    let randomColor = Math.floor(Math.random() * runnerObjects.length); // get random number from objects array
                    squares[i].style.backgroundImage = runnerObjects[randomColor]; // pass random number through array and assign it to the square
                }

            // then check if below square bg color is empty
            if(squares[i + width].style.backgroundImage === '') 
            {
                squares[i + width].style.backgroundImage = squares[i].style.backgroundImage; // pass color to empty bg square
                squares[i].style.backgroundImage = ''; // set inital square bg color to empty                
            }
        }     
    }

    
    // 3. function to check objects match
    //  check row of three
    function checkRowForThree()
    {
        let i;

        for(i = 0; i <= 61; i++) // last square to loop over is 61 as there are 64 squares in totals
        {
            let rowOfThree = [i, i + 1, i + 2]; // define row
            let decidedColor = squares[i].style.backgroundImage; // grab color of first square and assign to decided color
            const isBlank = squares[i].style.backgroundImage === ''; // if squares bg color is empty, this is true

            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55 ]; // define array of indexes not valid for checking a row match
            if(notValid.includes(i)) // check if index is a not valid index
                {
                    continue; // move to next iteration
                }

            
            if(rowOfThree.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) // if every index equals the decided color and is not blank
                {
                    score += 3; // score of 3 points
                    scoreDisplayed.innerHTML = score;

                    rowOfThree.forEach(index => // if match found, take row of three array and give empty bg color for every index in it
                        { 
                            squares[index].style.backgroundImage = '';
                        });
                }
        }
    }

    checkRowForThree();

    //  check column of three
    function checkColumnForThree()
    {
        let i;
        
        for(i = 0; i <= 47; i++) // last column square to loop over is 47
        {
            let columnOfThree = [i, i + width, i + width * 2]; // define column array
            let decidedColor = squares[i].style.backgroundImage; // grab color of first square and assign to decided color
            const isBlank = squares[i].style.backgroundImage === ''; // if squares bg color is empty, this is true
            
            if(columnOfThree.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) // if every index equals the decided color and is not blank
                {
                    score += 3; // score of 3 points
                    scoreDisplayed.innerHTML = score;

                    columnOfThree.forEach(index => // if match found, take column of three array and give empty bg color for every index in it
                        { 
                            squares[index].style.backgroundImage = '';
                        });
                }
        }
    }

    checkColumnForThree();

    // set up a repeating interval that will call functions constantly while playing so any code in below function will be invoked by the second parameter of 100 milliseconds
    window.setInterval(function()
    {
        moveDown();
        checkRowForThree();
        checkColumnForThree();
    }, 100);

    /* End code inspiration source: Ania Kubow tutorial */

    // once start button is clicked, score count starts from 0
    openGameButton.addEventListener("click", () =>
        {
            score = 0;
            scoreDisplayed.innerHTML = score;
        });

    // 5. function for timer countdown 
    const timerDisplay = document.querySelector("#timer");
    let timer = 30;

    function countDown()
    {
        setInterval(function()
        {
            if(timer <= 0)
                {
                    // game ends
                    console.log("time out");
                    clearInterval((timer = 0));
                    showGameOverInfo();
                }
            timerDisplay.innerHTML = timer;
            timer -= 1;
        }, 1000);
    }

    openGameButton.addEventListener("click", countDown);

    // 6. function to show up game over info
    function showGameOverInfo() 
    {
        const gameOverModal = document.getElementById("gameOverModal");
        gameOverModal.classList.remove("hidden");
        gameoverScoreDisplayed.innerHTML = score;
    }
    
    // 7. function to start the game again
    const playAgainButton = document.getElementById("play-again-button");

    function playAgain() 
    {
        const gameOverModal = document.getElementById("gameOverModal");
        gameOverModal.classList.toggle("hidden");

        score = 0;
        scoreDisplayed.innerHTML = score;
        timer = 20;
    }

    playAgainButton.addEventListener("click", playAgain);


});



