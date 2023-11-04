import { body,mainInfo } from "./index.js";

function loadMenuPage (){
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

    const menuItemsBox = document.createElement('div');
    menuItemsBox.classList.add('menu-box');
    const menuItems = [
        {
            name: 'Ricca',
            description: 'meat',
            price: '7$',
            photo: '../img/ricca.jpg',
        },
        {
            name: 'Quatro Formaggi',
            description: 'cheeze',
            price: '7$',
            photo: '../img/formaggi.jpg',
        },
        // {
        //     name: ,
        //     description: ,
        //     price: ,
        //     photo: ,
        // },
        // {
        //     name: ,
        //     description: ,
        //     price: ,
        //     photo: ,
        // },
    ];

    menuItems.forEach((item)=>{
        let menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        let itemName = document.createElement('p');
        itemName.textContent = item.name;
        let itemDiscr = document.createElement('p');
        itemDiscr.textContent = item.description;
        let itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        let itemPhoto = document.createElement('img');
        itemPhoto.src = item.photo;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPhoto);
        menuItem.appendChild(itemDiscr);
        menuItem.appendChild(itemPrice);

        menuItemsBox.appendChild(menuItem)
    })

    mainInfo.appendChild(menuItemsBox)
    body.appendChild(mainInfo);
    content.appendChild(body)
}

export default loadMenuPage