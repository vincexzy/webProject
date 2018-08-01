const arr = document.querySelectorAll("nav a");

arr[0].addEventListener("click",function () {
  for (var i = 0; i < arr.length; i++) {
    arr[i].classList.remove("active");
  }
  arr[0].classList.add("active");
});
arr[1].addEventListener("click",function () {
  for (var i = 0; i < arr.length; i++) {
    arr[i].classList.remove("active");
  }
  arr[1].classList.add("active");
});
arr[2].addEventListener("click",function () {
  for (var i = 0; i < arr.length; i++) {
    arr[i].classList.remove("active");
  }
  arr[2].classList.add("active");
});
arr[3].addEventListener("click",function () {
  for (var i = 0; i < arr.length; i++) {
    arr[i].classList.remove("active");
  }
  arr[3].classList.add("active");
});
