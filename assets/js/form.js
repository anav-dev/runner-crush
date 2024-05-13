// code source: EmailJS Docs used to install EmailJS SDK
const form = document.getElementById('form');
const formButton = document.getElementById('formButton');

const serviceID = 'default_service';
const templateID = 'template_10t4sow';

// function to send email
form.addEventListener('submit', function(event)
{
    event.preventDefault();

    emailjs.sendForm(serviceID, templateID, this).then(
        (response) => 
        {
            //console.log('SUCCESS!', response.status, response.text);

            let userName = document.getElementById('user_name');

            alert(`${userName.value} your message has been sent, thanks!`)
        },
        (error) => 
        {
            console.log('FAILED...', error);
        },
      );
})

