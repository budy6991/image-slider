const elvis = new Image()
const audio = new Image()
const musician = new Image()
const pianoTwo = new Image()
const piano = new Image()
const table = new Image()

elvis.src = '../images/elvis.jpg'
audio.src = '../images/audio.jpg'
musician.src = '../images/musician.jpg'
pianoTwo.src = '../images/piano-two.jpg'
piano.src = '../images/piano.jpg'
table.src = '../images/table.jpg'

const arrayOfImages = [elvis, audio, musician, pianoTwo, piano, table]

const rightArrow = document.querySelector('.right-arrow')
const leftArrow = document.querySelector('.left-arrow')
const imageContainer = document.querySelector('.image-container')

let i = 0



const nextImg = () => {
    imageContainer.removeChild(arrayOfImages[i])
    i++
    imageContainer.appendChild(arrayOfImages[i])
    if (i >= arrayOfImages.length-1) {
        imageContainer.removeChild(arrayOfImages[i])
        i = -1 
        i++
        imageContainer.appendChild(arrayOfImages[i])
    }
    return i
}

const prevImg = () => {
    imageContainer.removeChild(arrayOfImages[i])
    i--
    imageContainer.appendChild(arrayOfImages[i])
    return i
}

imageContainer.appendChild(arrayOfImages[0])




rightArrow.onclick = () => {
    nextImg()
    console.log(i)
}

leftArrow.onclick = () => {
    prevImg()
    
}