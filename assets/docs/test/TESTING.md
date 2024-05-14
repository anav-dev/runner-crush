# Runner Crush Testing

![Site Mockup](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/mockup/site-mockup.jpg)


---

## Site Functionality Test
- __Automated Test: HTML & CSS Validation__

    HTML and CSS code have been tested and validated by using: [W3C HTML](https://validator.w3.org/) and [W3C CSS](https://jigsaw.w3.org/css-validator/). 

    <details>
    <summary>Click here to see Validation Results</summary>
    <br>

    ![HTML Validation](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/W3C-HTML-Validator.jpg)

    ![CSS Validation](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/W3C-CSS-Validator.jpg)

    </details>


- __Manual Test__

    In order to ensure the proper functionality of this game, the following aspects have been tested manually: 

    1. Buttons: work and have the same format.
    2. Game: functions properly, matches can be made and squares are re-filled after a match is found.
    3. Game Features: images are properly displayed, score shows accurate user score, time countdown functions properly, game over modal appears when time is up and shows proper content.
    4. Icons: are properly styled and react to the selected dropdown box when clicked.
    5. Links: redirect to the corresponding site/section.
    6. Paths: set properly, no broken paths.
    7. Typos: absence of any typing error.
    8. Contact form, success alert and EmailJS message: work and are correctly displayed.
   
    
    The bellow table shows manual tests performanced:

    | Action | Expected Behaviour | Result |
    | :---         |     :---:      |          ---: |
    | 1. Click navbar links   | Redirect to corresponding section     | Pass    |
    | 2. Click logo image   | Redirects to Home page     | Pass    |
    | 3. Click arrow displayed when scrolled  | Redirect to document's top    | Pass    |
    | 4. Click 2nd and 3rd box on landing page  | Corresponding dropdown content appear, icons changed when box clicked    | Pass    |
    | 5. Click 'Let's Play' box   | Game modal is displayed, score set to 0 and time to 20    | Pass    |
    | 6. Check game's images   | Images are properly displayed    | Pass    | 
    | 7. Check object's valid moves   | Selected object can only be moved horizontally or vertically    | Pass    |   
    | 8. Make a game match  | Matched objects disappear, new random objects drop, and score is updated     | Pass    |
    | 9. Play till time up  | Game over modal is displayed     | Pass    |
    | 10. Click game over each modal icons  | Redirect to corresponding section, either Home page or reset game     | Pass    |
    | 11. Submit form with valid fields  | Success Alert is displayed, email from EmailJS SDK is received     | Pass    |
    | 12. Submit form with invalid fields  | Required field message pops up     | Pass    |
    | 13. Click content typos  | No typing mistakes     | Pass    |


- __Peer-code-review Test | Slack Community__

    After a peer-code-review request, the following issues were spotted by code peers feedback:

    1. On Landing page, the bottom dropdown content gets cut.

        <details>
        <summary>Click here to see Dropdown CSS bug</summary>
        <br>

        ![Dropdown CSS bug](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/css-bug-dropdown.jpg)

        </details>

    2. On Contact page, 'back-to-top' arrow has wrong style.

        <details>
        <summary>Click here to see Arrow CSS bug</summary>
        <br>

        ![Arrow CSS bug](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/css-bug-totop-arrow.jpg)

        </details>

    <br>

    > Further information about the above bugs on: [Bugs Section](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/TESTING.md#bugs).
    

## Responsiveness Test

The site responsiveness was tested by using [Ui.dev](https://ui.dev/amiresponsive) as well as Chrome Google Developer Tools checking how the site react to different screen sizes.  

<details>
<summary>Click here to see Site's Responsiveness</summary>
<br>

![Responsiveness](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/mockup/site-mockup-2.jpg)

</details>

## Accessibility Test

The following tools have been used to ensure this site meets the required accessibility standars: [Lighthouse](https://developer.chrome.com/docs/lighthouse#:~:text=Lighthouse%20has%20audits%20for%20performance,or%20as%20a%20Node%20module.) and 
[Wave.org](https://wave.webaim.org/)

<details>
<summary>Click here to see testing results below</summary>
<br>

![Wave Testing](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/wave-testing.jpg)
![Lighthouse Testing](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/lighthouse-testing.jpg)

</details>

> Further information about the Accessibility bugs on: [Bugs Section](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/TESTING.md#bugs).

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

    When an object or square was dragged and moved over the game board, it removed the square's background colour behind showing its default CSS colour rule.

    <details>
    <summary>Click here to see Unexpected Behavior</summary>
    <br>

    ![Game Board](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/js-bug-drag.jpg)

    </details>

    The issue was found in the function dragLeave(), where the code line `this.style.backgroundColor = ''` set the background colour of the current square to an empty string, so any background colour will be removed from the squares behind the object dragging. That code line was removed to fix this behavior.

    <details>
    <summary>Click here to see Faulty Code</summary>
    <br>

    ![Faulty Code](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/js-bug-drag-code.jpg)

    </details>

- __JS Split Up Squares Match__

    When a row starts at the left of the right-hand edge as well as for columns, it breaks up in two taking the move as a valid one, so rows of three split up, counting as a valid row match.

    <details>
    <summary>Click here to see Issue</summary>
    <br>

    ![Split Up Squares](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/js-bug-notvalidmove.jpg)

    </details>

    The issue was fixed by defining an array of all non-valid indexes inside the function that checks row matches, therefore specifying valid moves of squares solved this issue.

    <details>
    <summary>Click here to see Code</summary>
    <br>

    ![Solution Code](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/js-bug-notvalidmove-code.jpg)

    </details>

- __JS Game Counter Unexpected Behavior__

    After clicking the 'Let's Play' button, the score counter gets updated before the initial user move as there were already some random matches generated when building the game board using random objects.

    This issue was fixed by resetting the score to 0 after that button is clicked, using an addEventListener method as follows: `openGameButton.addEventListener("click", () => { score = 0; scoreDisplayed.innerHTML = score;})`.

- __JS Open Dropdown Boxes Function Stop Working__

    After implementing the game's JavaScript functionality, the dropdown boxes displayed on the landing page stop working properly, failing to open when clicked.

    Although the reason causing this issue was not found, this problem was fixed by modifying the function in charge of that functionality, indicating the displayed style of the selected box, as follows:

    <details>
    <summary>Click here to see Improved Function</summary>
    <br>

    ![Solution Code](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/js-bug-dropdow-code.jpg)

    </details>

- __Accessibility Errors__

    1 Contrast Error: The contrast between the 'FAQs' section text and the background colours was very low. To improve accessibility the initial chosen background colour `#4741A6` was replaced with a lighter blue tone `#9BBBFC` so that users with visual impairments can now read them easily.

    1 Empty Link: The navbar contact icon link had no text so an `aria-label="An envelope icon"` attribute was also added so when a screen reader encounters the link, the aria-label text is read so that the user will know what it is.

    2 Empty Buttons: Adding a `type="button"` attribute to the game over modal buttons was used to tell assistive technology that those element are a button used to perform an action.

    <details>
    <summary>Click here to see improved Lighthouse check</summary>
    <br>

    ![Lighthouse Testing improvement](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/test/lighthouse-testing.jpg)

    </details>


## Testing Tools

- [W3C HTML](https://validator.w3.org/)
- [W3C CSS](https://jigsaw.w3.org/css-validator/)
- [Ui.dev](https://ui.dev/amiresponsive)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse#:~:text=Lighthouse%20has%20audits%20for%20performance,or%20as%20a%20Node%20module.)
- [Wave.org](https://wave.webaim.org/)