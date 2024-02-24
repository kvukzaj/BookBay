let hamburgerbtn = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");
let closebtn = document.querySelector(".close");
hamburgerbtn.addEventListener("click", () => {
  nav_list.classList.add("active");
});
closebtn.addEventListener("click", () => {
  nav_list.classList.remove("active");
});

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
const countToDate = new Date().setHours(new Date().getHours() + 24);
let previousTimeBetweenDates;
setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}


// Counter section logic
$(document).ready(function () {
  $(".count").counterUp({
    delay: 10,
    time: 1200,
  });
});


$('#header-wrap').on('click', '.search-toggle', function(e) {
  var selector = $(this).data('selector');

  $(selector).toggleClass('show').find('.search-input').focus();
  $(this).toggleClass('active');

  e.preventDefault();
});


// close when click off of container
$(document).on('click touchstart', function (e){
  if (!$(e.target).is('.search-toggle, .search-toggle *, #header-wrap, #header-wrap *')) {
    $('.search-toggle').removeClass('active');
    $('#header-wrap').removeClass('show');
  }
});