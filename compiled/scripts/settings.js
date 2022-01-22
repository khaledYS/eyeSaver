/* settings-toggler --start-- */
const settingsToggler = document.querySelector('.settings-container > .toggler')
settingsToggler.addEventListener('click', ()=>{
    document.querySelector('.main > .settings-container').classList.toggle('active')
})
/* settings-toggler --end-- */

/* theme-toggler --start-- */
const themeToggler = document.querySelector('.settings-container > .settings-panel > .theme > .theme-toggler')
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
})
/* theme-toggler --end-- */