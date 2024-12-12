// Tempop pra o preloader

setTimeout(function() {
    document.querySelector('.pre-loader').style.display = 'none';
}, 12000);

setTimeout(function() {
    document.querySelector('section').style.display = 'flex';
}, 4000)



// script para o menu mobile

const btnMenu = document.getElementById("openMenu");
const menuMobile = document.getElementById("menuMobile");
const iconOpen = document.getElementById("iconOpen");
const iconClose = document.getElementById("iconClose");


// abrir menu
iconOpen.onclick = function(){
    menuMobile.style.display = "block"
    iconOpen.style.display = "none"
    iconClose.style.display = "block"
}

// fechar menu
iconClose.onclick = function(){
    menuMobile.style.display = "none"
    iconOpen.style.display = "block"
    iconClose.style.display = "none"
}





// script para o modal do btn saiba mais do inicio

const modal = document.getElementById("myModal");
const btnModal = document.getElementById("openModal");
const spanModal = document.getElementsByClassName("closeModal")[0];

btnModal.onclick = function(){
    modal.style.display = "block"
}

spanModal.onclick = function(){
    modal.style.display = "none"
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none"
    }
}