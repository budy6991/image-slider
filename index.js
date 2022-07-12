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

const leftArrow = document.querySelector('.left-arrow')
const imageContainer = document.querySelector('.image-container')

leftArrow.onclick = () => {
    arrayOfImages.forEach(image => {
        imageContainer.append(image)
    })
}