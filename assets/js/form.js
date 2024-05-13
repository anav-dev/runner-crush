// code source: EmailJS Docs used to install EmailJS SDK
const form = document.getElementById('form');
const formButton = document.getElementById('formButton');

const serviceID = 'default_service';
const templateID = 'template_10t4sow';

// function to send email
form.addEventListener('submit', function(event)
{
    event.preventDefault();

    let userName = document.getElementById('user_name');

    emailjs.sendForm(serviceID, templateID, this).then(
        (response) => 
        {
            console.log('SUCCESS!', response.status, response.text);

            // display alert so user knows message is sent
            alert(`${userName.value} your message has been sent, thanks!`)

            // clearing form fields after submission
            form.reset();
        },
        (error) => 
        {
            console.log('FAILED...', error);

            // display error msg so user knows message is not sent
            alert(`${userName.value} sorry, something went wrong, try again!`)
        },
      );
})

