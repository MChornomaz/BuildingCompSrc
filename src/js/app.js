import * as flsFunctions from "./modules/functions.js";

// browser webp support check

flsFunctions.isWebp();

//responcive
window.addEventListener('resize', () => {
    const header = document.querySelector('.header');
    const headerContainer = document.querySelector('.main-container');
    const headerContentHeight = headerContainer.offsetHeight;
    const mainSliderContent = document.querySelector('.collection-slider__content');
    document.body.style.cssText = `--headerContentHeight: ${headerContentHeight}px; --mainSliderContentWidth: ${mainSliderContent.offsetWidth}px;`;
    header.setAttribute.offsetHeight = `${headerContentHeight * 1.6}px`
    if(document.body.offsetWidth === 600 || document.body.offsetWidth === 900 || document.body.offsetWidth === 1200 || document.body.offsetWidth === 1600){
        window.location.reload();
        console.log('reload')
    }
})
const headerContainer = document.querySelector('.main-container');
const headerContentHeight = headerContainer.offsetHeight;
const mainSliderContent = document.querySelector('.collection-slider__content');
document.body.style.cssText = `--headerContentHeight: ${headerContentHeight}px; --mainSliderContentWidth: ${mainSliderContent.offsetWidth}px;`;



// MENU BURGER
const burgerIcon = document.querySelector('#burger-label');
const burgerLink = document.querySelectorAll('.navigation-burger__item');
const burgerInput = document.querySelector('#navi-toggle');

burgerIcon.addEventListener('click', () => {
    document.body.classList.toggle('fixed');
})

burgerLink.forEach(el => el.addEventListener('click', ()=>{
    burgerInput.checked = false;
    document.body.classList.remove('fixed');
}))


//MAIN SLIDER

const mainSliderBtns = document.querySelectorAll('.controls__input');

mainSliderBtns.forEach(el => {
    el.addEventListener('click', () => {
        const slides = document.querySelector('.main-slider__items').children;
        mainSliderBtns.forEach(elem => elem.parentElement.classList.remove('controls__block--active'))
        el.parentElement.classList.add('controls__block--active');
        for (let slide of slides) {
            if (slide.id.slice(-1) === el.id.slice(-1)) {
                slide.classList.remove('main-slider__content--hidden');
            } else {
                slide.classList.add('main-slider__content--hidden');
            }
        }
    })
})

// PROJECTS SLIDER

const projectsSliderBtns = document.querySelectorAll('.project-controls__input');

projectsSliderBtns.forEach(el => {
    el.addEventListener('click', () => {
        const slides = document.querySelector('.projects__slider').children;
        projectsSliderBtns.forEach(elem => elem.parentElement.classList.remove('project-controls__block--active'))
        el.parentElement.classList.add('project-controls__block--active');
        for (let slide of slides) {
            if (slide.id.slice(-1) === el.id.slice(-1)) {
                slide.classList.remove('project__content--hidden');
            } else {
                slide.classList.add('project__content--hidden');
            }
        }
    })
})

// FEATURED COLLECTION SLIDER

const collectionSlider = document.querySelector('.collection-slider__items');
const collectionLeftArrow = document.querySelector('.collection-slider__left-arrow');
const collectionRightArrow = document.querySelector('.collection-slider__right-arrow');

const moveRight = () =>{
    const collectionCard = document.querySelector('.collection-card');
    const leftArrowIcon = document.querySelector('#left-arrow');
    const rightArrowIcon = document.querySelector('#right-arrow');
    const cardWidth = collectionCard.offsetWidth + 30;
    let currentTransform = +collectionSlider.style.transform.slice(11, -3);
    if (collectionSlider.offsetWidth + currentTransform < collectionSlider.offsetWidth  && document.body.offsetWidth < 580) {
        collectionSlider.style.transform = `translateX(${currentTransform + cardWidth}px)`;
        currentTransform = +collectionSlider.style.transform.slice(11, -3);
    }else if ((collectionSlider.offsetWidth + currentTransform) < (collectionSlider.offsetWidth-60)  &&  document.body.offsetWidth <= 600 &&  document.body.offsetWidth >= 580) {
    currentTransform = +collectionSlider.style.transform.slice(11, -3);
    collectionSlider.style.transform = `translateX(${currentTransform + cardWidth-10}px)`;
    currentTransform = +collectionSlider.style.transform.slice(11, -3);;
}else if (collectionSlider.offsetWidth + currentTransform < collectionSlider.offsetWidth  && document.body.offsetWidth < 900 && document.body.offsetWidth > 600) {
        collectionSlider.style.transform = `translateX(${currentTransform + cardWidth}px)`;
        currentTransform = +collectionSlider.style.transform.slice(11, -3);
    }else if (collectionSlider.offsetWidth + currentTransform < collectionSlider.offsetWidth-100   && document.body.offsetWidth >= 900) {
        collectionSlider.style.transform = `translateX(${currentTransform + cardWidth}px)`;
        currentTransform = +collectionSlider.style.transform.slice(11, -3);
    }else{
        leftArrowIcon.setAttribute('opacity', '0.5');
    }

    rightArrowIcon.setAttribute('opacity', '1');
};

const moveLeft = () => {
    const collectionCard = document.querySelector('.collection-card');
    const leftArrowIcon = document.querySelector('#left-arrow');
    const rightArrowIcon = document.querySelector('#right-arrow');
    const cardWidth = collectionCard.offsetWidth + 30;
    let currentTransform = +collectionSlider.style.transform.slice(11, -3);
    if ((collectionSlider.offsetWidth + currentTransform > cardWidth+50)  && document.body.offsetWidth < 580) {
        collectionSlider.style.transform = `translateX(${currentTransform - cardWidth}px)`;
        currentTransform = +collectionSlider.style.transform.slice(11, -3);
    }else if ((collectionSlider.offsetWidth + currentTransform > (cardWidth+80))  &&  document.body.offsetWidth <= 600 &&  document.body.offsetWidth >= 580) {
        currentTransform = +collectionSlider.style.transform.slice(11, -3);
        collectionSlider.style.transform = `translateX(${currentTransform - cardWidth -7}px)`;
        currentTransform = +collectionSlider.style.transform.slice(11, -3);
    }else if ((collectionSlider.offsetWidth + currentTransform > cardWidth * 2 + 30)  && document.body.offsetWidth < 900 && document.body.offsetWidth >= 600) {
        collectionSlider.style.transform = `translateX(${currentTransform - cardWidth}px)`;
        currentTransform = +collectionSlider.style.transform.slice(11, -3);
    }else if ((collectionSlider.offsetWidth + currentTransform > cardWidth * 3 + 30)  && document.body.offsetWidth >= 900) {
        collectionSlider.style.transform = `translateX(${currentTransform - cardWidth-5}px)`;
        currentTransform = +collectionSlider.style.transform.slice(11, -3);
    } else{
        rightArrowIcon.setAttribute('opacity', '0.5');
    }

    leftArrowIcon.setAttribute('opacity', '1');
}

collectionLeftArrow.addEventListener('click', () => moveRight());
collectionRightArrow.addEventListener('click', () => moveLeft());

let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
    if (touchendX < touchstartX-30) moveLeft()
    if (touchendX > touchstartX+30) moveRight()
}

collectionSlider.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})

collectionSlider.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection()
});



//VIDEOS

const videoElements = document.querySelectorAll('.video');
videoElements.forEach(el => {
    const playBtn = el.nextElementSibling;
    const playSvg = `<svg width="13" height="16" viewBox="0 0 13 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.871094 0.773926V15.2255L12.2259 7.99973L0.871094 0.773926Z" fill="white" />
                </svg>`;
    const pauseSvg = `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5,4 C6.67157288,4 6,4.67157288 6,5.5 L6,18.5 C6,19.3284271 6.67157288,20 7.5,20 L8.5,20 C9.32842712,20 10,19.3284271 10,18.5 L10,5.5 C10,4.67157288 9.32842712,4 8.5,4 L7.5,4 Z M7.5,3 L8.5,3 C9.88071187,3 11,4.11928813 11,5.5 L11,18.5 C11,19.8807119 9.88071187,21 8.5,21 L7.5,21 C6.11928813,21 5,19.8807119 5,18.5 L5,5.5 C5,4.11928813 6.11928813,3 7.5,3 Z M15.5,3 L16.5,3 C17.8807119,3 19,4.11928813 19,5.5 L19,18.5 C19,19.8807119 17.8807119,21 16.5,21 L15.5,21 C14.1192881,21 13,19.8807119 13,18.5 L13,5.5 C13,4.11928813 14.1192881,3 15.5,3 Z M15.5,4 C14.6715729,4 14,4.67157288 14,5.5 L14,18.5 C14,19.3284271 14.6715729,20 15.5,20 L16.5,20 C17.3284271,20 18,19.3284271 18,18.5 L18,5.5 C18,4.67157288 17.3284271,4 16.5,4 L15.5,4 Z"/>
                </svg>`;
    
    playBtn.addEventListener('click', function () {
        if (el.paused) {
            el.play();
            playBtn.classList.add('hide');
        } else {
        el.pause();
            playBtn.classList.remove('hide');
    }
}, false);

})











