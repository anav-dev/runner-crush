# Runner Crush Testing

![Site Mockup]()


---

## Site Functionality Testing


## Responsiveness Testing


## Accessibility Test Testing


## Browsers Testing


## Bugs
- __JS TypeError__

    When setting the display style property of the element with the class name 'fa-angle-down', a TypeError appeared. As stated by [MDN Docs](https://developer.mozilla.org/en-US/), the TypeError occurs when performing an operation involving unexpected data types. 

    <details>
        <summary>Click here to see TypeError</summary>
        <br>

        ![Console TypeError](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/js-type-error.jpg)

        ![Faulty Code](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/js-type-error.jpg)

    </details>


    The problem arose because the 'getElementsByClassName' method selects all elements with the class name 'fa-angle-down' instead of just one. To specifically target the first element,'[0]' was added to access it directly.
    
    Correct Code: document.getElementsByClassName('fa-angle-down')[0]

## Testing Tools