import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";


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
let contact = document.createElement('div')
contact.innerHTML = "Contact";

pages.appendChild(home);
pages.appendChild(menu);
pages.appendChild(contact);

header.appendChild(pages)

content.appendChild(header)

// Body
const body = document.createElement('div');
const mainInfo = document.createElement('div');

home.addEventListener('click',()=>{
    mainInfo.innerHTML = '';
    loadHomePage();
})

menu.addEventListener('click',()=>{
    mainInfo.innerHTML = '';
    loadMenuPage();
})

contact.addEventListener('click',()=>{
    mainInfo.innerHTML = '';
    loadContactPage();
})

loadHomePage();

export {body, mainInfo}