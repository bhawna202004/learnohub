let body = document.body;

// USER BUTTON
let profile = document.querySelector('.header .flex .profile');
document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    searchForm.classList.remove('active');
}

// SEARCH BUTTON
let searchForm = document.querySelector('.header .flex .search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    profile.classList.remove('active')
}

let sidebar = document.querySelector('.side-bar');
document.querySelector('#menu-btn').onclick = () => {
 sidebar.classList.toggle('active');
 body.classList.toggle('active')
}

// SCROLL EVENT
window.onscroll = () => {
    profile.classList.remove('active');
    searchForm.classList.remove('active');
    sidebar.classList.remove('active');
}
