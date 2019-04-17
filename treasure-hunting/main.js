'use strict';
{
  const images = [
    '../img/sea.jpg',
    '../img/mountain.jpg',
    '../img/amusement-park.jpg',
    '../img/space.jpg',
    '../img/house.jpg',
    '../img/sky.jpg',
    '../img/church.jpg',
    '../img/river.jpg'
  ]

  const treasure = Math.floor(Math.random() * images.length);
  console.log(`treasure ${treasure}`);
  let currentPlace = 0;
  let playtSlideShow;
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const result = document.getElementById('result');
  
  start.addEventListener('click', () => {
    result.style.display = 'none';
    start.style.display = 'none';
    stop.style.display = 'block';
    addCurrentPlace();
    playtSlideShow = setInterval(() => {
      removeCurrentPlace();
      currentPlace++;
      if (currentPlace === images.length) {
        currentPlace = 0;
      }
      addCurrentPlace();
    },300)
  })
  
  stop.addEventListener('click', () => {
    result.style.display = 'block';
    console.log(`現在地 ${currentPlace}`);
    stop.style.display = 'none';
    start.style.display = 'block';
    clearInterval(playtSlideShow);

    if (currentPlace === treasure) {
      console.log('found!!')
      result.src = 'img/treasure.jpg';

    } else {
      console.log('failed!!')
      result.src = 'img/trash.jpg';
    }
  })
  
  const removeCurrentPlace = () => {
    document.querySelectorAll('.place')[currentPlace].classList.remove('place--active');
  }

  const addCurrentPlace = () => {
    document.querySelectorAll('.place')[currentPlace].classList.add('place--active');
  }
  
}