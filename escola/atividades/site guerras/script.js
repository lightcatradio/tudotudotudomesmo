const scroller = document.querySelector(".content");

scroller.addEventListener("wheel", function (e) {
  e.preventDefault();
  scroller.scrollLeft += e.deltaY * 10;
});
