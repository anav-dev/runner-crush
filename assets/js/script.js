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

// 1. create game board 
  
// 2. create function to drag objects

// 3. create function to drop objects

// 4. create function to check objects match

// 5. create function to clear game, start over