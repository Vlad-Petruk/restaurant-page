function loadMainPage() {
    const content = document.querySelector('#content')

    // Header
    const header = document.createElement('div');
    header.classList.add('header')

    let h1 = document.createElement('h1');
    h1.classList.add('dan');
    h1.innerHTML = 'DANIEL';
    header.appendChild(h1);

    let pages = document.createElement('div');
    pages.classList.add('pages');

    let home = document.createElement('div');
    home.innerHTML = 'Home';
    let menu = document.createElement('div');
    menu.innerHTML = 'Menu';
    let about = document.createElement('div')
    about.innerHTML = "About";

    pages.appendChild(home);
    pages.appendChild(menu);
    pages.appendChild(about);

    header.appendChild(pages)

    content.appendChild(header)

    // Body
    const body = document.createElement('div');
    body.classList.add('body');

    const mainInfo = document.createElement('div');
    mainInfo.classList.add('main-info');
    
    const advertText = document.createElement('div');
    advertText.classList.add('advert-text');
    advertText.textContent = 'Wine cellar, wine tasting, 🍕wood-fired Neapolitan pizza 🍝Italian pasta 🥩🍤grilled or baked meat and fish, original sushi';

    const advertPhoto = document.createElement('div');
    advertPhoto.classList.add('advert-photo');
    const chefPhoto = document.createElement('img');
    chefPhoto.classList.add('chef');
    chefPhoto.src= '../img/chef.jpeg'
    advertPhoto.appendChild(chefPhoto);

    mainInfo.appendChild(advertText)
    mainInfo.appendChild(advertPhoto)

    body.appendChild(mainInfo);
    content.appendChild(body)
}

export default loadMainPage