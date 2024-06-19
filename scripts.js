let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let eyeBrow = document.querySelector('.container-eyebrow');
let items = eyeBrow.querySelectorAll('.eyebrow .item');
let linksWindow = document.querySelector('.links')
let bntClose = document.getElementById('btn-close')

let btnPrev = document.getElementById('btn-prev')
let btnNext = document.getElementById('btn-next')
let nails = document.querySelector('.container-nails')
let itens = nails.querySelectorAll('.nails .item')
let ButtonClose = document.getElementById('close')
let nailLink = document.querySelector('.link-nail')

let slideEyeBrow = 100;
let openEyeBrow = 0;


let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let nailsPosition = itens.length - 1;


if (!eyeBrow.querySelector('.eyebrow .item.active')) {
    items[0].classList.add('active');
}


nextButton.onclick = () => {
    let itemOld = eyeBrow.querySelector('.eyebrow .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    active = (active + 1 > lastPosition) ? firstPosition : active + 1;
    let itemNew = items[active];
    if (itemNew) {
        itemNew.classList.add('active');
    }
};


prevButton.onclick = () => {
    let itemOld = eyeBrow.querySelector('.eyebrow .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    active = (active - 1 < firstPosition) ? lastPosition : active - 1;
    let itemNew = items[active];
    if (itemNew) {
        itemNew.classList.add('active');
    }
};

if (!nails.querySelector('.nails .item.active')) {
    itens[0].classList.add('active');
}


btnNext.onclick = () => {
    let itemOld = nails.querySelector('.nails .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    active = (active + 1 > nailsPosition) ? firstPosition : active + 1;
    let itemNew = itens[active];
    if (itemNew) {
        itemNew.classList.add('active');
    }
}


btnPrev.onclick = () => {
    let itemOld = nails.querySelector('.nails .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    active = (active - 1 < firstPosition) ? nailsPosition : active - 1;
    let itemNew = itens[active];
    if (itemNew) {
        itemNew.classList.add('active');
    }
}
    

    linksWindow.onclick = () => {
        eyeBrow.style.opacity = 1
        eyeBrow.style.transform = "translateX(" + openEyeBrow + "vw)"
        eyeBrow.style.position = "fixed"
        eyeBrow.style.top = "50%"
        eyeBrow.style.left = "50%"
    }

    bntClose.onclick = () => {
        eyeBrow.style.opacity = 0
        eyeBrow.style.position = "fixed"
        eyeBrow.style.left = "170%"
    }

    ButtonClose.onclick = () => {
        nails.style.opacity = 0
        nails.style.position = "fixed"
        nails.style.left = "170%"
    }

    nailLink.onclick = () =>{
        nails.style.opacity = 1
        nails.style.transform = "translateX(" + openEyeBrow + "vw)"
        nails.style.position = "fixed"
        nails.style.top = "50%"
        nails.style.left = "50%"
    }

