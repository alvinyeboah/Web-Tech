const images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg","img/img5.jpg"];

let currentImageIndex = 0;
const imageElement = document.getElementById("imageSwitcher");

function switchImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imageElement.src = images[currentImageIndex];
}

setInterval(switchImage, 5000);

window.onload = () => {
  imageElement.style.opacity = 1;
};

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginPage = document.querySelector(".login-page");
const signupPage = document.querySelector(".signup-page");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginPage.style.display = "block";
  signupPage.style.display = "none";
});

signupTab.addEventListener("click", () => {
  console.log("test");

  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupPage.style.display = "block";
  loginPage.style.display = "none";
});
