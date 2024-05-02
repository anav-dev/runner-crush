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

    ![Faulty Code](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/js-type-error-code.jpg)

    </details>


    The problem arose because the 'getElementsByClassName' method selects all elements with the class name 'fa-angle-down' instead of just one. To specifically target the first element,'[0]' was added to access it directly.
    
    Correct Code: document.getElementsByClassName('fa-angle-down')[0]

- __JS Dragging Unexpected Behavior__

    When an object or square was dragged and moved over the game board, it removed the squares background colour behind showing its default CSS colour rule.

    <details>
    <summary>Click here to see Unexpected Behavior</summary>
    <br>

    ![Game Board](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/js-bug-drag.jpg)

    </details>

    The issue was found in the function dragLeave(), where the code line `this.style.backgroundColor = ''` set the background colour of the current square to an empty string, so any background colour will be removed from the squares behind the object dragged. That code line was removed to fix this behavior.

    <details>
    <summary>Click here to see Faulty Code</summary>
    <br>

    ![Faulty Code](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/js-bug-drag-code.jpg)

    </details>

## Testing Tools