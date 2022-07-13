const elvis = new Image();
const audio = new Image();
const musician = new Image();
const pianoTwo = new Image();
const piano = new Image();
const table = new Image();
const startOfSlideShow = new Image()
const endOfSlideshow = new Image();

elvis.src = '../images/elvis.jpg';
audio.src = '../images/audio.jpg';
musician.src = '../images/musician.jpg';
pianoTwo.src = '../images/piano-two.jpg';
piano.src = '../images/piano.jpg';
table.src = '../images/table.jpg';
endOfSlideshow.src = '../images/tableBlank.jpg'
startOfSlideShow.src = '../images/elvisBlank.jpg'

const arrayOfImages = [elvis, audio, musician, pianoTwo, piano, table, endOfSlideshow];

const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const imageContainer = document.querySelector('.image-container');

imageContainer.append(arrayOfImages[0])

let i = 0;
let backwards = null
let forward = null

const changeImg = () => {
  imageContainer.removeChild(arrayOfImages[i]);
  i++;
  imageContainer.appendChild(arrayOfImages[i]);
  if (i === 6) {
    imageContainer.removeChild(arrayOfImages[i]);
    i = 0;
    imageContainer.appendChild(arrayOfImages[i]);
  } 
  return i;
};


rightArrow.onclick = () => {
    backwards = false
    forward = true
    changeImg()
};

leftArrow.onclick = () => {
    backwards = true
    forward = false
    if (backwards === true && forward === false) {
        imageContainer.removeChild(arrayOfImages[i])
        i -- 
        imageContainer.appendChild(arrayOfImages[i])
        if (i === 0) {
            //Start slideshow again
        }
    }
    
};

