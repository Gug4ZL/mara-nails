let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let eyeBrow = document.querySelector('.container-eyebrow');
let items = eyeBrow.querySelectorAll('.eyebrow .item');
let linksWindow = document.querySelector('.links')
let bntClose = document.getElementById('btn-close')

let slideEyeBrow = 100;
let openEyeBrow = 0;


let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;


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


linksWindow.onclick = () => {
    eyeBrow.style.opacity = 1
    eyeBrow.style.transform = "translateX("+ openEyeBrow + "vw)"
    eyeBrow.style.position = "fixed"
    eyeBrow.style.top = "50%"
    eyeBrow.style.left = "50%"
}

bntClose.onclick = () => {
   eyeBrow.style.opacity = 0
   eyeBrow.style.position = "fixed"
   eyeBrow.style.left = "170%"



//    eyeBrow.style.transform = "translateX("+ slideEyeBrow + "vw)"
}

