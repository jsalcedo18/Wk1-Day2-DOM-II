// Your code goes here
//MDN: https://developer.mozilla.org/en-US/docs/Web/Events

/*-------------------------MVP Tasks------------------------------------------------------------------------------------------⬇*/
/*: Variable + Names *///➡
const navLinks = document.querySelectorAll('.nav-link'); //nodelist
    const navLinksArray = Array.from(navLinks); //to an array
        const homeLink = navLinksArray[0];
        const aboutUsLink = navLinksArray[1];
        const blogLink = navLinksArray[2];
        const contactLink = navLinksArray[3];

/*1: Mouse Over *///➡
function navLinkSize (event) {
    event.target.style.fontSize = '2.1rem';
    event.target.style.fontWeight = 'bold';
    event.target.style.backgroundColor = '#ffebcd';
    event.target.style.padding = '15px';
    event.target.style.borderRadius = '10px';
    
    setTimeout(function() {
        event.target.style.fontSize = '';
        event.target.style.fontWeight = '';
        event.target.style.backgroundColor = '';
        event.target.style.padding = '';
        event.target.style.borderRadius = '';
    }, 750);
};

homeLink.addEventListener('mouseover', navLinkSize);
aboutUsLink.addEventListener('mouseover', navLinkSize);
blogLink.addEventListener('mouseover', navLinkSize);
contactLink.addEventListener('mouseover', navLinkSize);

/*2: Keydown *///➡
const popUpDiv = document.createElement('div');
popUpDiv.classList.add('AboutPopUp');

const container = document.querySelector('body');
container.appendChild(popUpDiv);

popUpDiv.style.backgroundColor = 'white';
popUpDiv.style.border = 'black';
popUpDiv.style.borderSize = '10px';

//-------------------------------
const popUpPhrase = document.createElement('h1');
popUpDiv.appendChild(popUpPhrase);

popUpPhrase.classList.add('popUp-Phrase');

popUpPhrase.textContent = 'Are you sure you want to navigate to the About Us page?';

//-------------------------------
function buttonCreator(text, className){
    const button = document.createElement('button'); 
    button.textContent = text;

    button.classList.add('button'); 
    button.classList.add(className);

    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    button.style.fontSize = '1.6rem';
    button.style.padding = '10px';
    button.style.borderRadius = '10px';
    
    return button; //have to return it in order to use this function outside of its scope
  }

    const confirmButton = buttonCreator("Yes, I'm sure", 'confirm-button'); 
    const declineButton = buttonCreator("No, I'll stay", 'decline-button'); 

  //***^^^That won't show up on the page yet */
  popUpDiv.appendChild(confirmButton); 
  popUpDiv.appendChild(declineButton); 

