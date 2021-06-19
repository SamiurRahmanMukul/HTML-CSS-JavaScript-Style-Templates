var imageArray = [
  "assets/images/1.jpg",
  "assets/images/2.jpg",
  "assets/images/3.jpg",
  "assets/images/4.jpg",
  "assets/images/5.jpg",
  "assets/images/6.jpg",
  "assets/images/7.jpg",
  "assets/images/8.jpg",
  "assets/images/9.jpg",
  "assets/images/10.jpg",
];

var frame = document.querySelector(".imageFrame");

var count = 0;

setInterval(function () {
  count++;

  if (count >= 10) {
    count = 0;
    frame.src = imageArray[count];
  } else {
    frame.src = imageArray[count];
  }
}, 1000);
