const elvis = new Image()
const audio = new Image()
const musician = new Image()
const pianoTwo = new Image()
const piano = new Image()
const table = new Image()

elvis.src = './elvis.jpg'
audio.src = './audio.jpg'
musician.src = './musician.jpg'
pianoTwo.src = './piano-two.jpg'
piano.src = './piano.jpg'
table.src = './table.jpg'

const arrayOfImages = [elvis, audio, musician, pianoTwo, piano, table]

const leftArrow = document.querySelector('.left-arrow')
const imageContainer = document.querySelector('.image-container')

leftArrow.onclick = () => {
    arrayOfImages.forEach(image => {
        imageContainer.append(image)
    })
}