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

// add event listener to the domLoaded variable so HTML file is read and loaded, executes function
document.addEventListener(domLoaded, () =>
{
    //console.info("DOM fully loaded");
    const grid = document.querySelector('.grid');
    const width = 8;
    const squares = []; // empty array to store new created divs added into a grid

    // array with objects
    const runnerObjects = 
    [
        'green',
        'yellow',
        'pink',
        'red',
        'blue',
        'purple',       
    ]

    // 1. create game board: a 8x8 grid of div elements with the class "grid"
    function createBoard() 
    {
        for(let i = 0; i < width * width; i++) //loop over 64 times
        {
            const square = document.createElement('div'); // create new div
            let randomObject = Math.floor(Math.random() * runnerObjects.length); // assign random full integer
            square.style.backgroundColor = runnerObjects[randomObject];// passing a number to array
            grid.appendChild(square); // put square into a div with class of grid
            squares.push(square); // push square into array
        } 
    }

    createBoard();



})


  
// 2. create function to drag objects

// 3. create function to drop objects

// 4. create function to check objects match

// 5. create function to clear game, start over