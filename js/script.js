'use strict'
// ---------------------------------
// offer clock 
// ----------------------------------
const commonAddress = ".container .promotion_wrapper .promotion_text .times"; 
const HourTag = document.querySelector(
    `${commonAddress} .hour`
);

const MunitesTag = document.querySelector(`${commonAddress} .munite`);
const SecoundTag = document.querySelector(`${commonAddress} .secound`);

// set timer 

const ClockTicker = () => {
    let Clock = new Date();
    HourTag.innerText = Clock.getHours();
    MunitesTag.innerText = Clock.getMinutes();
    SecoundTag.innerText = Clock.getSeconds();
}

// ClockTicker()
setInterval(() => {
    ClockTicker()
}, 1000);


console.log(document.querySelectorAll('.product_wrapper .items'))
// -----------------------------------
// on select full image function 
// --------------------------------------




// disable a tag 
const getAllA = document.querySelectorAll('a');

getAllA.forEach( (item, index) => {
    item.onclick = () => false;
});



// nav bar 
const getNavBtn = document.querySelector('.menu_icon .menu_btn');
const getNav = document.querySelector('.nav_bar')
console.log(getNavBtn);

getNavBtn.onclick = () => {
    getNav.classList.toggle('active');
}