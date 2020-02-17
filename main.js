/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  $("#slideshow > div:gt(0)").hide();

  setInterval(function() { 
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  3000);

  
  $("#slideshow2 > div:gt(0)").hide();

  setInterval(function() { 
    $('#slideshow2 > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow2');
  },  3000);

  $(function() {
    "use strict";
  
    var init = "No items yet!";
    var counter = 0;
  
    // Initial Cart
    $(".counter").html(init);
  
    // Add Items To Basket
    function addToBasket() {
      counter++;
      $(".counter")
        .html(counter)
        .animate(
        {
          opacity: "0"
        },
        300,
        function() {
          $(".counter")
            .delay(300)
            .animate({
            opacity: "1"
          });
        }
      );
    }
  
    // Add To Basket Animation
    $("button").on("click", function() {
      addToBasket();
      $(this)
        .parent()
        .parent()
        .find(".product_overlay")
        .css({
        transform: " translateY(0px)",
        opacity: "1",
        transition: "all ease-in-out .45s"
      })
        .delay(1500)
        .queue(function() {
        $(this)
          .css({
          transform: "translateY(-500px)",
          opacity: "0",
          transition: "all ease-in-out .45s"
        })
          .dequeue();
      });
    });
  });

function scrollAppear(){
  var abouttext = document.querySelector('.abouttext');
  var aboutimg = document.querySelector('.aboutimg');
  var introPosition = abouttext.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;


  if(introPosition < screenPosition){
    abouttext.classList.add('introduction-appear');
    aboutimg.classList.add('introduction-appear');
  }


}

window.addEventListener('scroll',scrollAppear);
