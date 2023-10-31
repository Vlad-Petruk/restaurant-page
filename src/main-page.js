function loadMainPage() {
    const content = document.querySelector('#content')
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
}

export default loadMainPage