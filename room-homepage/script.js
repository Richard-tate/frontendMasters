const btnNext = document.querySelector('.next-btn-desk');
const btnBack = document.querySelector('.back-btn-desk');
const btnBackM = document.querySelector('.back-btn-mobile');
const btnNextM = document.querySelector('.next-btn-mobile');
const firstCard = document.querySelector('.card-one');
const secondCard = document.querySelector('.card-two');
const thirdCard = document.querySelector('.card-three');
const firstCol = document.querySelector('.row-one-col-one');
const navbtnOpen = document.querySelector('.mobile-nav-btn');
const navbar = document.querySelector('.mobile-nav-ul');
const closenav = document.querySelector('.close');

btnNext.addEventListener('click', slidenext);
btnBack.addEventListener('click', slideBack);
btnNextM.addEventListener('click', slidenext);
btnBackM.addEventListener('click', slideBack);
navbtnOpen.addEventListener('click', openNav);
closenav.addEventListener('click', close);

function openNav(){
    navbar.style.marginTop = '-100px';
}

function close(){
    navbar.style.marginTop = '-300px';
}
function slidenext(){
    if(firstCard.classList.contains('show')){
        firstCard.classList.remove('show');
        secondCard.classList.add('show');
        firstCol.setAttribute('style', 'background: url("images/desktop-image-hero-2.jpg")100% / cover no-repeat');
    }
    else if(secondCard.classList.contains('show')){
        secondCard.classList.remove('show');
        thirdCard.classList.add('show');
        firstCol.setAttribute('style', 'background: url("images/desktop-image-hero-3.jpg")100% / cover no-repeat');
    }
}

function slideBack(){
    if(thirdCard.classList.contains('show')){
        thirdCard.classList.remove('show');
        secondCard.classList.add('show');
        firstCol.setAttribute('style', 'background: url("images/desktop-image-hero-2.jpg")100% / cover no-repeat');
    }
    else if(secondCard.classList.contains('show')){
        secondCard.classList.remove('show');
        firstCard.classList.add('show'); 
        firstCol.setAttribute('style', 'background: url("images/desktop-image-hero-1.jpg")100% / cover no-repeat');
    }
}



  
 