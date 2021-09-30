console.log("hello world");
var fullimg = document.querySelector(".fullimg");

var centerimg = document.querySelector("#full-center-img");
var galimgs = document.querySelector(".gallerybody").children;
console.log(galimgs);
Array.from(galimgs).forEach((item) => {
  item.addEventListener("click", function () {
    window.fullimg.style.display = "flex";
    window.centerimg.src = this.src;
  });
});
// galimgs.addEventListener("click", function () {
//   alert("hello");
// });
fullimg.addEventListener("click", function () {
  window.fullimg.style.display = "none";
});

console.log(fullimg);
console.log(centerimg);
