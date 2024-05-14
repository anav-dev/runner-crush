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
            );
        });
});

