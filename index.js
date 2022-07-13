(() => {
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

const arrayOfImages = [elvis, audio, musician, pianoTwo, piano, table];

const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const imageContainer = document.querySelector('.image-container');
const pauseBtn = document.querySelector('.pause')
let pressed = false
let unPressed = true



imageContainer.append(arrayOfImages[0])

let i = 0;

const nextImg = () => {
  imageContainer.removeChild(arrayOfImages[i]);
  i++;
  imageContainer.appendChild(arrayOfImages[i]);
  if (i === arrayOfImages.length-1) {
    imageContainer.removeChild(arrayOfImages[i]);
    i = 0;
    imageContainer.appendChild(arrayOfImages[i]);
  } 
  return i;
};

const prevImg = () => {
  if (i === 0) {
    imageContainer.removeChild(arrayOfImages[i]);
    i = arrayOfImages.length-1;
    imageContainer.appendChild(arrayOfImages[i]);
  }
  else {
    imageContainer.removeChild(arrayOfImages[i]);
    i--;
    imageContainer.appendChild(arrayOfImages[i]);
  }
  
  return i;
}

rightArrow.onclick = () => {
    nextImg()
    
};

leftArrow.onclick = () => {
    prevImg()  
};


pauseBtn.onclick = () => {
  if (unPressed === true){
    unPressed = false
    pressed = true
    console.log(`Pressed: ${pressed}, Unpressed: ${unPressed}`)
    clearInterval(myInterval)
  }
  else if (pressed === true){
    pressed = false 
    unPressed = true
    console.log(`Pressed: ${pressed}, Unpressed: ${unPressed}`)
    myInterval = setInterval(nextImg, 5000)
  }
}

let myInterval = setInterval(nextImg, 5000)

})();