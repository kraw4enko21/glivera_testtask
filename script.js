const btn = document.querySelector('.header__close')
const block = document.querySelector('.header__block')
const blockBtn = document.querySelector('.header__authorization')
const menu = document.querySelector('.modalone__content')
const menuBtn = document.querySelector('.header__burger')
const menuLink = document.querySelectorAll('.modalone__item')
btn.addEventListener('click',()=>{
    block.classList.add('close')
    blockBtn.classList.add('getup')
    menu.classList.add('getup-two')
})
menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('close')
})
console.log(menuLink)
menuLink.forEach((i)=>{
    i.addEventListener('click',()=>{
        console.log('click')
        menu.classList.add('close')
    })
})