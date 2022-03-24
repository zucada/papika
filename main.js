const toggle = document.querySelector('.toggle input')
const fundo = document.querySelector('.fundo')
const black = document.querySelector('.black')
const container = document.querySelector('.container')
const title = document.querySelector('.title')
const kitty = document.querySelector('.hello')
const pompom = document.querySelector('.pompex')
const pompom1 = document.querySelector('.pompex1')


toggle.addEventListener('click', () => {
    const onOff = toggle.parentNode.querySelector('.onoff')
    const removeBg = fundo.classList.contains('apagado')

    onOff.textContent = toggle.checked ? 'on' : 'off' 
    
    if(removeBg) {
        fundo.classList.remove('apagado')
        removeTitle()
        addKitty()
        addPompex()
        addPompex1()
    }
        else {
            fundo.classList.add('apagado')
            addTitle()
            removeKitty()
            removePompex()
            removePompex1()
        }
    
})

function removePompex() {
    pompom.src = ''
}

function addPompex() {
    pompom.src = '/images/pompom.gif'
}

function removePompex1() {
    pompom1.src = ''
}

function addPompex1() {
    pompom1.src = '/images/pompom.gif'
}

function addKitty() {
    kitty.src = '/images/hello kitty.png'
}

function removeKitty() {
    kitty.src = ''
}


function removeTitle() {
    title.innerHTML = '<span style="color:pink">happy b-day<br>papika<span>'
}

function addTitle() {
    title.innerHTML = 'acenda as luzes'
}