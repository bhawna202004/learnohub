let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-button').addEventListener("click",() =>{
    profile.classList.toggle('active')
})

window.onscroll = () =>{
        profile.classList.remove('active')
}
