const toggle = document.querySelector('.toggle input')
const fundo = document.querySelector('.fundo')
const black = document.querySelector('.black')
const container = document.querySelector('.container')
const title = document.querySelector('.title')
const kitty = document.querySelector('.hello')
const pompom = document.querySelector('.pompex')
const pompom1 = document.querySelector('.pompex1')
const audio = document.querySelector('.audio')
const cinna = document.querySelector('.cinna')
const keroppi = document.querySelector('.keroppi')
const melody = document.querySelector('.melody')
const kuromi = document.querySelector('.kuromi')
const padre = document.querySelector('.parent')


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
        playSong()
        change()
    }
        else {
            fundo.classList.add('apagado')
            addTitle()
            removeKitty()
            removePompex()
            removePompex1()
            pauseSong()
            remove()
        }
    
})

// audio.addEventListener('ended', replay())

// function replay() {
//     audio.loop = true
// }

function playSong() {
    audio.play()
    audio.volume = 0.5

}

function pauseSong() {
    audio.pause()
}

function change() {
    padre.style.opacity = "1"
}

function remove() {
    padre.style.opacity = "0"
}

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
