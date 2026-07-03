
function randomColors(elem) {

    const colors = ['red','blue', 'green']
    const randomPosition = Math.floor(Math.random()*3)
    console.log(randomPosition)
    const h5 = elem
    h5.style.color = colors[randomPosition] 
}