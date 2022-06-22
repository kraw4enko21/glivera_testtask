// const btn = document.querySelector('.header__close')
// const block = document.querySelector('.header__block')
// const blockBtn = document.querySelector('.header__authorization')
const menu = document.querySelector('.menu__list')
const menuBtn = document.querySelector('.menu__burger')
const menuLink = document.querySelectorAll('.menu__link-lists')
// btn.addEventListener('click',()=>{
//     block.classList.add('close')
//     blockBtn.classList.add('getup')
//     menu.classList.add('getup-two')
// })
menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('close')
})
menuLink.forEach((i)=>{
    i.addEventListener('click',()=>{
        menu.classList.add('close')
    })
})