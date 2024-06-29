const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const eyeBrow = document.querySelector('.container-eyebrow');
const items = eyeBrow.querySelectorAll('.eyebrow .item');
const linksWindow = document.querySelector('.links')
const bntClose = document.getElementById('btn-close')

const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')
const nails = document.querySelector('.container-nails')
const itens = nails.querySelectorAll('.nails .item')
const ButtonClose = document.getElementById('close')
const nailLink = document.querySelector('.link-nail')

const slideEyeBrow = 100;
const openEyeBrow = 0;


let active = 0;
const firstPosition = 0;
const lastPosition = items.length - 1;
const nailsPosition = itens.length - 1;


if (!eyeBrow.querySelector('.eyebrow .item.active')) {
    items[0].classList.add('active');
}


nextButton.onclick = () => {
    const itemOld = eyeBrow.querySelector('.eyebrow .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    active = (active + 1 > lastPosition) ? firstPosition : active + 1;
    const itemNew = items[active];
    if (itemNew) {
        itemNew.classList.add('active');
    }
};


prevButton.onclick = () => {
    const itemOld = eyeBrow.querySelector('.eyebrow .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    active = (active - 1 < firstPosition) ? lastPosition : active - 1;
    const itemNew = items[active];
    if (itemNew) {
        itemNew.classList.add('active');
    }
};

if (!nails.querySelector('.nails .item.active')) {
    itens[0].classList.add('active');
}


btnNext.onclick = () => {
    const itemOld = nails.querySelector('.nails .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    active = (active + 1 > nailsPosition) ? firstPosition : active + 1;
    const itemNew = itens[active];
    if (itemNew) {
        itemNew.classList.add('active');
    }
}


btnPrev.onclick = () => {
    const itemOld = nails.querySelector('.nails .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    active = (active - 1 < firstPosition) ? nailsPosition : active - 1;
    const itemNew = itens[active];
    if (itemNew) {
        itemNew.classList.add('active');
    }
}
    

    linksWindow.onclick = () => {
        eyeBrow.style.display = "block"
        eyeBrow.style.transform = `translateX(${ openEyeBrow }vw)`
        eyeBrow.style.position = "fixed"
        eyeBrow.style.top = "50%"
        eyeBrow.style.left = "50%"
    }

    bntClose.onclick = () => {
        eyeBrow.style.display = "none"
    }

    ButtonClose.onclick = () => {
        nails.style.display = "none"
    }

    nailLink.onclick = () =>{
        nails.style.display = "block"
        nails.style.transform = `translateX(${ openEyeBrow }vw)`
        nails.style.position = "fixed"
        nails.style.top = "50%"
        nails.style.left = "50%"
    }

