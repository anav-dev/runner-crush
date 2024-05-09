/*** Index Page ***/

// 1. open dropdown box
function openDropdownInstructions()
{
    //console.log('clicked')
    const dropdownInstructions = document.getElementById('dropdownInstructions').classList.toggle('show');

    // if dropdown is displayed, hide arrow icon and show x mark
    const arrow = document.getElementsByClassName('fa-angle-down')[0]
    const xmark = document.getElementsByClassName('fa-xmark')[0]

    if(dropdownInstructions)
    {
        arrow.style.display = 'none'
        xmark.style.display = 'inline-block'
    } else
    {
        xmark.style.display = 'none'
        arrow.style.display = 'inline-block'
    }
}

function openDropdownFaq()
{
    const dropdownFaq = document.getElementById('dropdownFaq').classList.toggle('show')

    // if dropdown is displayed, hide arrow icon and show x mark
    const arrow = document.getElementsByClassName('fa-angle-down')[1]
    const xmark = document.getElementsByClassName('fa-xmark')[1]

    if(dropdownFaq)
    {
        arrow.style.display = 'none'
        xmark.style.display = 'inline-block'
    } else
    {
        xmark.style.display = 'none'
        arrow.style.display = 'inline-block'
    }
}



/*** Game Page ***/
/* Code inspiration source: Ania Kubow tutorial */
const domLoaded = "DOMContentLoaded";

// add event listener to the domLoaded variable so when HTML file is read and loaded, executes function
document.addEventListener(domLoaded, () =>
{
    //console.info("DOM fully loaded");

    const grid = document.querySelector('.grid');
    const width = 8;
    const squares = []; // empty array to store new created divs added into a grid
    let score = 0;

    // array with objects
    const runnerObjects =
    [
        'green',
        'white',
        'pink',
        'red',
        'blue',
        'purple',
    ]

    // 1. create game board: a 8x8 grid of div elements with the class 'grid'
    function createBoard()
    {
        for(let i = 0; i < width * width; i++) //loop over 64 times
        {
            const square = document.createElement('div'); // create new div
            square.setAttribute('draggable', true); // make square draggable
            square.setAttribute('id', i); // give id to each square
            let randomObject = Math.floor(Math.random() * runnerObjects.length); // assign random full integer
            square.style.backgroundColor = runnerObjects[randomObject];// passing a number to array
            grid.appendChild(square); // put square into a div with class of grid
            squares.push(square); // push square into array
        }
    }

    createBoard();


    // 2. create function to drag objects
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
        //console.log(this.id, 'dragstart')

        objectBeingDragged = this.style.backgroundColor; // store color dragged into a variable
        //console.log(objectBeingDragged);
        squareIdBeingDragged = parseInt(this.id); // assign square dragged id to this square id integer
    }

    // prevent default action when object is moved
    function dragOver(e)
    {
        //console.log(this.id, 'dragover')

        e.preventDefault();
    }

    // prevent default action when object is placed
    function dragEnter(e)
    {
        //console.log(this.id, 'dragenter')

        e.preventDefault();
    }

    // place back an object to original place when object is left
    function dragLeave()
    {
        //console.log(this.id, 'dragleave')
    }

    // give selected square being dragged other color when object is dropped
    function dragDrop()
    {
        //console.log(this.id, 'drop')

        objectBeingReplaced = this.style.backgroundColor; // store color
        squareIdBeingReplaced = parseInt(this.id); // assign this square id integer to variable
        this.style.backgroundColor = objectBeingDragged; // change square color into color being dragged
        squares[squareIdBeingDragged].style.backgroundColor = objectBeingReplaced; // add square color into the array
    }

    // handle the ending of the drag
    function dragEnd()
    {
        //console.log(this.id, 'dragend')

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
            squares[squareIdBeingReplaced].style.backgroundColor = objectBeingReplaced; // restore color to original
            squares[squareIdBeingDragged].style.backgroundColor = objectBeingDragged; // set initial square to original color
        } else
        {
            squares[squareIdBeingDragged].style.backgroundColor = objectBeingDragged; // set color back to initial square
        }
    }


    // 3. create function to check objects match
    //  check row of three
    function checkRowForThree()
    {
        for(i = 0; i < 61; i++) // last square to loop over is 61 as there are 64 squares in totals
        {
            let rowOfThree = [i, i + 1, i + 2]; // define row
            let decidedColor = squares[i].style.backgroundColor; // grab color of first square and assign to decided color
            const isBlank = squares[i].style.backgroundColor === ''; // if squares bg color is empty, this is true

            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55 ]; // define array of indexes not valid for checking a row match
            if(notValid.includes(i)) // check if index is a not valid index
                {
                    continue // move to next iteration
                }

            
            if(rowOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) // if every index equals the decided color and is not blank
                {
                    score += 3; // score of 3 points
                    rowOfThree.forEach(index => // if match found, take row of three array and give empty bg color for every index in it
                        { 
                            squares[index].style.backgroundColor = '';
                        }) 
                }
        }
    }

    checkRowForThree();

    //  check column of three
    function checkColumnForThree()
    {
        for(i = 0; i < 47; i++) // last column square to loop over is 47
        {
            let columnOfThree = [i, i + width, i + width * 2]; // define column array
            let decidedColor = squares[i].style.backgroundColor; // grab color of first square and assign to decided color
            const isBlank = squares[i].style.backgroundColor === ''; // if squares bg color is empty, this is true
            
            if(columnOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) // if every index equals the decided color and is not blank
                {
                    score += 3; // score of 3 points
                    columnOfThree.forEach(index => // if match found, take column of three array and give empty bg color for every index in it
                        { 
                            squares[index].style.backgroundColor = '';
                        }) 
                }
        }
    }

    checkColumnForThree();

    // set up a repeating interval that will call functions constantly while playing so any code in below function will be invoked by the second parameter of 100 milliseconds
    window.setInterval(function()
    {
        checkRowForThree();
        checkColumnForThree();
    }, 100)








})


// 4. create function to drop objects

// 5. create function to clear game, start over