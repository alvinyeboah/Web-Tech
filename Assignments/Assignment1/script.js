const images = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg"
];

let currentImageIndex = 0;
const imageElement = document.getElementById("imageSwitcher");

function switchImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imageElement.src = images[currentImageIndex]; 
}

// Switch image every 5 seconds
setInterval(switchImage, 5000);

window.onload = () => {
  imageElement.style.opacity = 1;
};
