# Runner Crush
This is a game where the player aims to match as many running objects as possible before running out of time. Runner Crush is a three-page site that can be used by gaming lovers who are looking to unwind in their spare time.

**Click here to see live site**: [Runner Crush](https://anav-dev.github.io/runner-crush/)


---

![Site Mockup](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/mockup/site-mockup.jpg)

## User Experience
- __Objectives__
  
  This website's main goal is to provide an opportunity to stimulate the user's mind through an engaging pleasing site.

  It also aims to offer an easy-to-navigate experience for the user through its intuitive and user-friendly design so that users can have an easy experience while having fun.
  
- __User Stories__
  
  **As a user I would like to:**

    >Be able to read the game instructions so that I can know how to play.

    >Be able to read frequently asked questions so that I can get basic information about the game.

    >Be able to play the game on different screen sizes so that I can use different devices.

    >Be able to easily play over the game so I can play again and improve my score.
  
    >Easily navigate the site so I can find what I need quickly.
  
    >Use a visually appealing website so that I can have a pleasant gaming experience.

    >Be able to contact the website owner so that I can resolve any doubts.

## Design
- __Wireframe__

  The website wireframe was created by using [Balsamiq.com](https://balsamiq.com/).
  
  <details>
  <summary>Click here to see wireframe bellow</summary>
  <br>
    
  ![Landing Page Wireframe](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/wireframes/wireframe-bigscreen-landingpage.png)

  ![Landing Page Small Screens Wireframe](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/wireframes/wireframe-smallscreen-landingpage.png)

  ![Game Page Wireframe](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/wireframes/wireframe-bigscreen-gamepage.png)

  ![Game Page Small Screens Wireframe](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/wireframes/wireframe-smallscreen-gamepage.png)
  
  </details>
  
- __Colour Palettes__
  
  A **bright color palette** was chosen to create an energetic and playful atmosphere in users as well as to ensure an engaging gaming experience. 
  
  The calming effect of blue colors can contribute to a sense of relaxation and stress relief for users, aiding in maintaining a strong focus on the game.
  
  Different sunflower yellow tones were used to add contrast to the site to ensure accessibility as well as to add a joy sense, improving the game use. 

  The Contact section content was set to white to allow readability.

  ![Colour Scheme](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/features/color-scheme.jpg)

> [!NOTE]
> To improve accessibility the initial blue colour (#4741A6), used for the bottom box on the landing page, was replaced with a lighter one (#9BBBFC).


- __Imagery__
  
  All images that appear on the website are from [Pngtree.com](https://pngtree.com/) and have been chosen to offer an overall theme to the game: running.
  
## Site Features
- __Navigation Bar__
  
  A clear and defined navigation system that provides links (to the Contact page and back to the Home page) within the document to allow users to navigate smoothly. 

  It has a responsive design, therefore it responds to user needs by adapting to different screen sizes.

    <details>
    <summary>Click here to see Navbar below</summary>
    <br>

    ![Navbar](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/features/nav-bar.jpg)

    </details>

    <details>
    <summary>Click here to see responsive Navbar</summary>
    <br>
      
    ![Navbar on Small Screens](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/features/nav-bar-responsive.jpg)

    </details>


- __Landing Page__

  On the landing page, the navbar, the page title and three centered boxes are displayed. The first one prompts the user to start playing the game, the second contains the game instructions on a dropdown box, and the last one provides a FAQs dropdown box so user experience is improved allowing users to answer the most commonly asked questions surrounding the game.

    <details>
    <summary>Click here to see Landing page</summary>
    <br>

    ![Landing Page](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/features/landing-page.jpg)

    </details>

    <details>
    <summary>Click here to see opened Dropdown boxes</summary>
    <br>

    ![Dropdown Boxes](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/features/landing-page-dropdown.jpg)

    </details>

- __Game Modals__

  Two modals build the Javascript game: the game modal and the game over modal.
  
  The first one is displayed after the 'Let's Play' button on the landing page is clicked. The game board is an 8 x 8 squares board that contains the runner objects placed in random order and a navigation bar with the user score and game timer (20 seconds). The user will then match them and group them to score points.

    <details>
    <summary>Click here to see Game modal</summary>
    <br>

    ![Game Modal](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/features/game-modal.jpg)

    </details>
  
  Once the time is up, the game over modal will be displayed, showing the end game user score as well as two buttons, one for restarting the game and the other for stopping playing that redirect users to the landing page.

    <details>
    <summary>Click here to see Game Over modal</summary>
    <br>

    ![Game Over Modal](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/features/gameover-modal.jpg)

    </details>

- __Contact Page__
  
  This page allows users to contact the site owner through a contact form. The user will be asked to submit their name, surname, email address, and message.

    <details>
    <summary>Click here to see Contact form</summary>
    <br>

    ![Contact Form](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/features/contact-form.jpg)

    </details>

  After submitting the form, an alert message will appear on the top of the document, and the form field data will be reset. The site owner will then receive a message thanks to the implemented [EmailJS SDK](https://www.emailjs.com/).

    <details>
    <summary>Click here to see Alert Message</summary>
    <br>

    ![Success Alert](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/features/contact-form-alert-success.jpg)

    </details>

    <details>
    <summary>Click here to see Test Email</summary>
    <br>

    ![Success New EmailJS Message](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/features/contact-form-emailjs-success-new-message.jpg)

    </details>

- __Footer__
  The footer section displays the copyright details of the site owner and has a minimal style.

    <details>
    <summary>Click here to see Footer</summary>
    <br>

    ![Footer](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/features/footer.jpg)

    </details>

- __Scroll to Top Arrow__

  This arrow appears on the page's bottom right side when scrolling down and, if clicked, brings users back to the top of the website, so navigation is smoother and more effective for users.

    <details>
    <summary>Click here to see Arrow</summary>
    <br>

    ![Scroll to Top Arrow](https://github.com/anav-dev/runner-crush/blob/main/assets/docs/features/totop-arrow.jpg)

    </details>



- __Future Features__

  Ranking Players Score: Creating another JavaScript modal that contains the best ranking players' scores so users' engagement activity can be increased.

  Video Tutorial: Adding a video of how to play the game to show a visual game example to users and clarify the instructions. It might be placed inside the landing page Instructions dropdown box if styling correctly.

  Error Page: Making a special page for errors, like when a page isn't found (404 error), to help users find their way around more easily.


## Testing

  Testing carried out to confirm the functionality of this site can be found in this separate file: [Testing.md](https://github.com/anav-dev/runner-crush/blob/main/TESTING.md)

## Technology 

- __Languages__
  
  HTML for site structure, CSS for styling, and JavaScript for adding landing and contact page functionalities and building the game.

- __Libraries__
  
  [Fontawesome v6.5.2](https://fontawesome.com/) for site icons.

- __Tools__
  
  [VSC](https://code.visualstudio.com/), [Git](https://git-scm.com/) for version control, and [Github](https://github.com/) for hosting.

## Deployment

  This site is hosted on GitHub Pages, and deployed from the main branch. 

  **To set up hosting:**

    1.Log into GitHub.

    2.Choose the repository: https://github.com/anav-dev/runner-crush

    3.Go to settings.

    4.Under GitHub Pages, select "main branch" as the source.

    5.The project will be deployed automatically, and the page URL will be public.

  **For cloning:**

    1.Open Terminal.
  
    2.Navigate to the desired directory.

    3.Type: git clone https://github.com/anav-dev/runner-crush.git

    4.Press Enter to clone locally.

    5.To disconnect from the repository, type: git remote rm origin.

## Credits

**References**
- Colour Palettes: [SheCodes.io](https://palettes.shecodes.io/) , [Coolors.co](https://coolors.co/)
- Favicon: [Favicon.io](https://favicon.io/)
- Icons: [Fontawesome.com](https://fontawesome.com/)
- Images: [Pngimg.com](https://pngimg.com/)
- Logo: [Canva.com](https://www.canva.com/)
- Wireframe: [Balsamiq.com](https://balsamiq.com/)
- Ania Kubow: [Ania Kubow Youtube](https://www.youtube.com/channel/UC5DNytAJ6_FISueUfzZCVsw)
- Coding Nepal: [CodingNepal](https://www.codingnepalweb.com/login-signup-form-html-css-javascript/)
- FreeCodeCamp: [FreeCodeCamp.org](https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/)
- EmailJS: [EmailJS](https://www.emailjs.com/)


**Troubleshooting**
- MDN Documentation: [MDN Docs](https://developer.mozilla.org/en-US/) 
- W3Schools: [W3Schools.com](https://www.w3schools.com/) 
- StackOverflow: [Stackoverflow.com](https://stackoverflow.com/)
- Tutorial.eyehunts: [Tutorial.eyehunts.com](https://tutorial.eyehunts.com/js/onclick-location-href-open-html-pages-website-on-a-button-click/)
- Github: [Github Discussions](https://github.com/orgs/emailjs-com/discussions/67)
- Codepen: [Codepen.io](https://codepen.io/kumar/pen/dWEgLg)
- Forums Meteor: [Forums.meteor.com](https://forums.meteor.com/t/solved-html5-drag-drop-touch/46178)

  
**Support & Advice**
- Mentor: Alan Bushell
- Code Institute | Slack Community