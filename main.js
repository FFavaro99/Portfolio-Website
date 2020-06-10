const navLanding = document.querySelector('ul').firstElementChild;
const navProjects = document.querySelector('ul').firstElementChild.nextElementSibling;
const navContacts = document.querySelector('ul').lastElementChild.previousElementSibling;
const navCv = document.querySelector('ul').lastElementChild;



const openLanding = () => {
    closeContacts();
    closeProjects();
    const landing = document.querySelector('.landing');
    if (!landing.classList.contains('landing--open')){
        landing.classList.add('landing--open')
        landing.firstElementChild.classList.add('landing__h1--open');
    }
}


const closeLanding = () => {
    const landing = document.querySelector('.landing');
    if (landing.classList.contains('landing--open')){
        landing.classList.remove('landing--open')
        landing.firstElementChild.classList.remove('landing__h1--open');
    }
}

const openProjects = () => {
    closeLanding();
    closeContacts();
}

const closeProjects = () => {
    return;
}

const openContacts = () => {
    closeLanding();
    closeProjects();
    const contacts = document.querySelector('.contacts');
    contacts.classList.add('open');
}

const closeContacts = () => {
    document.querySelector('.contacts').classList.remove('open');
}



navLanding.addEventListener('click', openLanding);
navProjects.addEventListener('click', openProjects);
navContacts.addEventListener('click', openContacts);

openLanding();