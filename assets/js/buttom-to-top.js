// scroll to top of the document functionality when user clicks on button
window.addEventListener('scroll', function()
{
    const toTopButton = document.getElementById("back-to-top");
    const pxScrolled = 20;

    if(window.scrollY > pxScrolled)
        {
            toTopButton.classList.remove("hidden");
        } else 
        {
            toTopButton.classList.add("hidden");
        }

    toTopButton.addEventListener('click', function()
        {
            window.scrollTo(
                {
                    top: 0,
                    behavior: 'smooth'
                }
            )
        })
})


// // function myScrollFunc () 
// // {
// //     const y = window.scrollY;

// //     // when scroll down 20px from the top of the document, show button
// //     if (y >= 20) {
// //         toTopButton.className = "show"
// //     } else {
// //         toTopButton.className = "hidden"
// //     }
// // };

// window.addEventListener("scroll", myScrollFunc);

// 2. function to scroll to the document top on click button