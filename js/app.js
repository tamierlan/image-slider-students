
let mainContainer = document.querySelector(".container")
let imageTitle = document.querySelector(".car-name");
let imageNode = document.querySelector(".img-container");
let rightBtnNode = document.querySelector("#icon-right");
let leftBtnNode = document.querySelector("#icon-left");
let carouselNode = document.querySelector(".carousel");
let playBtn = document.querySelector("#playBtn");
let stopBtn = document.querySelector("#stopBtn");
let title = document.querySelector(".car-name")

let names = ["Mersedes", "Mersedes2", "close look", "BMW"]

let vehicles = [
  './img/contBcg-0.jpeg',
  './img/contBcg-1.jpeg',
  './img/contBcg-2.jpeg',
  './img/contBcg-4.jpeg',
];

let activeIndex = 0;

drawCarousel();
drawActiveImage(activeIndex);

// FUNCTION FOR UI THE IMAGES IN THE CAROUSEL AND MAKE THEM CLICKABLE //
function drawCarousel() {
  vehicles.forEach((el, index) => {
    let oneImg = document.createElement('img');
    oneImg.setAttribute('src', el);
    
    oneImg.onclick = function () {
      drawActiveImage(index);
    };
    carouselNode.appendChild(oneImg);
  });
}

// WHEN CLICK TO SINGLE IMAGE IN THE CAROUSEL, IT IS DISPLAYED AS MAIN IMG //
function drawActiveImage(index) {

  imageNode.style.backgroundImage = `url(${vehicles[index]})`;
  title.innerText = names[index];
  let imgNodeList = document.querySelector(".carousel").children
  for(let i = 0; i < imgNodeList.length; i++){
    if(i === index){
      imgNodeList[i].classList.add("active")
      console.log(imgNodeList[i])
    } else {
      imgNodeList[i].classList.remove("active")
    }
    
  }
}


// click to right btn
  rightBtnNode.addEventListener("click", function () {
    console.log("right is clicked")
    ++activeIndex;
    if( activeIndex === 0){
      activeIndex++
    }
    if(activeIndex > vehicles.length-1){
      activeIndex = 0
    }
  drawActiveImage(activeIndex)
  });

// click to left btn
    leftBtnNode.addEventListener("click", function () {
        console.log("left is clicked")
        --activeIndex
        if( activeIndex < 0){
          activeIndex =  vehicles.length-1
      }
      drawActiveImage(activeIndex) 
    });
  
// AUTOPLAY    
playBtn.addEventListener("click", function(){
  repeat = setInterval(function() {
    ++activeIndex;
    if( activeIndex === 0){
      activeIndex++
    }
  
    if(activeIndex > vehicles.length-1){
      activeIndex = 0
    }
  drawActiveImage(activeIndex) 
    }, 1600)
  })

// STOP AUTOPLAY
stopBtn.addEventListener("click", function(){
  console.log("clicked")

  clearInterval(repeat)
})

