
let homeMark = document.getElementById("homemark")
let guestMark = document.getElementById("guestmark")
let number = 0
let mark = 0

function increaseOne() {
    mark = mark + 1
    homeMark.textContent = mark 
    
}

function increaseTwo() {
    mark = mark + 2
    homeMark.textContent = mark 
}

function increaseThree() {
    mark = mark + 3
    homeMark.textContent = mark 
}



function increase1() {
    number = number + 1
    guestMark.textContent = number
}

function increase2() {
    number = number + 2
    guestMark.textContent = number
}
function increase3() {
    number = number + 3
    guestMark.textContent = number
}