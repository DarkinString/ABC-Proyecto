
function randomColors() {

    const colors = ['red','blue', 'green']
    const randomPosition = Math.floor(Math.random()*3)
    const h5 = document.querySelector('h5')
    h5.style.color = colors[randomPosition] 
}