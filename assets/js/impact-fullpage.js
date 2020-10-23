new fullpage('#fullpage', {
	//options here
    autoScrolling: true,
    navigation: true,
    controlArrows: false,
    slidesNavigation: true,
	  slidesNavPosition: 'bottom'
});

// Jquery Counter-Up from Codepen

let something = document.getElementById("something");

something.addEventListener("scroll", (e) => {
  console.log("test");
  e.counterUp({
    delay: 10,
    time: 2000
  })
});

// function counterUp() {
//   console.log("test");
//   delay: 10;
//   time: 2000;
// }


$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');

// $('.counter').counterUp({
//   delay: 10,
//   time: 2000
// });



/*
$(".section").scroll() {
  $(this).child(".counter").counterUp({

  })
}
*/
// $("#apax").scroll() {


//   $('#apax .counter').counterUp({
    
//       delay: 10,
//       time: 2000
//     });
// }

// $("#aincu").scroll() {


//   $('#aincu .counter').counterUp({
//       delay: 10,
//       time: 2000
//     });
// }




