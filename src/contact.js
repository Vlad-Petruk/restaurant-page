import { body,mainInfo } from "./index.js";

function loadContactPage (){
    const content = document.querySelector('#content')

    // Body
    body.classList.add('body');

    mainInfo.classList.add('main-info');
    
    // const advertText = document.createElement('div');
    // advertText.classList.add('advert-text');
    // advertText.textContent = 'Wine cellar, wine tasting, 🍕wood-fired Neapolitan pizza 🍝Italian pasta 🥩🍤grilled or baked meat and fish, original sushi';

    // const advertPhoto = document.createElement('div');
    // advertPhoto.classList.add('advert-photo');
    // const chefPhoto = document.createElement('img');
    // chefPhoto.classList.add('chef');
    // chefPhoto.src= '../img/chef.jpeg'
    // advertPhoto.appendChild(chefPhoto);

    // mainInfo.appendChild(advertText)
    // mainInfo.appendChild(advertPhoto)

    body.appendChild(mainInfo);
    content.appendChild(body)
}

export default loadContactPage