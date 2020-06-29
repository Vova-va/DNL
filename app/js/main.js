$(function () {
  $(".header_menu-list").on("click", function () {
    $(".menu ul").slideToggle();
  });

  $(".slider_inner").slick({
    arrows: false,
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 884,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $(".about_slider").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 884,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  var selected = document.querySelector(".selected"),
  optionsContainer = document.querySelector(".options-container"),
  optionsList = document.querySelectorAll(".option"),
  selected1 = document.querySelector(".selected1"),
  optionsContainer1 = document.querySelector(".options-container1"),
  optionsList1 = document.querySelectorAll(".option1"),
  selected2 = document.querySelector(".selected2"),
  optionsContainer2 = document.querySelector(".options-container2"),
  optionsList2 = document.querySelectorAll(".option2"),
  selected3 = document.querySelector(".selected3"),
  optionsContainer3 = document.querySelector(".options-container3"),
  optionsList3 = document.querySelectorAll(".option3"),
  selected4 = document.querySelector(".selected4"),
  optionsContainer4 = document.querySelector(".options-container4"),
  optionsList4 = document.querySelectorAll(".option4"),
  boxes = document.querySelectorAll(".selected, .selected1, .selected2, .selected3");



  boxes.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("colored");
    });
  });

  selected4.addEventListener("click", function(){
    optionsContainer4.classList.toggle("active4");
  });

  optionsList4.forEach((o) => {
    o.addEventListener("click", function(){
      selected4.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer4.classList.toggle("active4");
    });
  });

  selected3.addEventListener("click", function () {
    optionsContainer3.classList.toggle("active3");
  });

  optionsList3.forEach((o) => {
    o.addEventListener("click", function () {
      selected3.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer3.classList.toggle("active3");
    });
  });

  selected2.addEventListener("click", function () {
    optionsContainer2.classList.toggle("active2");
  });

  optionsList2.forEach((o) => {
    o.addEventListener("click", function () {
      selected2.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer2.classList.toggle("active2");
    });
  });

  selected1.addEventListener("click", function () {
    optionsContainer1.classList.toggle("active1");
  });

  optionsList1.forEach((o) => {
    o.addEventListener("click", function () {
      selected1.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer1.classList.remowe("active1");
    });
  });

  selected.addEventListener("click", function () {
    optionsContainer.classList.toggle("active");
  });

  optionsList.forEach((o) => {
    o.addEventListener("click", function () {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
});
