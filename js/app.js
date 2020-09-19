// Interview-ish Class:
// Everyone should try by their own! After we will go over each solution.
// Important: Please don't copy from somewhere. Be responsible and eager to learn and prepared to real interviews.

// STEPS TO TAKE:

// 1. Make sure manual slider works when we press left or right buttons.
var car_name = document.querySelector('.car-name');
var img_container = document.querySelector('.img-container');
var carousel = document.querySelector('.carousel');


var data = [
  {title: 'Mercedes', img: 'url(./img/contBcg-0.jpeg) center/cover no-repeat'},
  {title: 'Mercedes-plate', img: 'url(./img/contBcg-1.jpeg) center/cover no-repeat'},
  {title: 'BMW Black', img: 'url(./img/contBcg-2.jpeg) center/cover no-repeat'},
  {title: 'Audi', img: 'url(./img/contBcg-3.jpeg) center/cover no-repeat'},
  {title: 'Dodge Challenger', img: 'url(./img/contBcg-4.jpeg) center/cover no-repeat'}
]
var index = 0;
var nnn = true;
car_name.innerHTML = data[0].title
img_container.style.background = data[0].img

const iconLeft = () => {
  if (nnn) {
    nnn = false;
  } else {
    index === 0 ? index = 4 : index--
    carousel.innerHTML = '';
  }

  car_name.innerHTML = data[index].title
  img_container.style.background = data[index].img

  for (var x = 0; x < data.length; x++) {
    var img = document.createElement('img');
    if (x === index) {
      img.style.background = data[x].img;
      img.style.opacity = '1';
      carousel.appendChild(img);
    } else {
      img.style.background = data[x].img;
      carousel.appendChild(img);
    }
  }
}
if (nnn) {iconLeft()}



const iconRight = () => {
  index === 4 ? index = 0 : index++
  car_name.innerHTML = data[index].title
  img_container.style.background = data[index].img
  carousel.innerHTML = '';

  for (var x = 0; x < data.length; x++) {

    var img = document.createElement('img');
    if (x === index) {
      img.style.background = data[x].img;
      img.style.opacity = '1';
      carousel.appendChild(img);
    } else {
      img.style.background = data[x].img;
      carousel.appendChild(img);
    }
  }
}

let roll = true;
// let stop = false

const playBtn = () => {
  if (roll) {
    setTimeout(() => {
      index === 4 ? index = 0 : index++
      car_name.innerHTML = data[index].title
      img_container.style.background = data[index].img
      carousel.innerHTML = '';
      for (var x = 0; x < data.length; x++) {
        var img = document.createElement('img');
        if (x === index) {
          img.style.background = data[x].img;
          img.style.opacity = '1';
          carousel.appendChild(img);
        } else {
          img.style.background = data[x].img;
          carousel.appendChild(img);
        }
      }
      console.log('tami')
      playBtn()
    }, 900)
  }
}

const stopBtn = () => {
  roll = false
  setTimeout(() => {
    roll = true
  },1000)
}





// 2. Make sure you see each car's name on top of the each image. The names should change when you click left or right buttons accordingly.

// 3. Then try to implement automatic slider using start/stop buttons. hint: setInterval, clearInterval

// 4. Optional: You can show all images in small format under main image and store them inside "carousel" div.
// This option is very broad that you can im plement so that when each small images clicked show it on main image div.
// You can even implement border highlight(or any other effect) to specific small image when it is active on main div.
