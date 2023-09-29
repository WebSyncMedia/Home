$(document).ready(function(){
    $("#Svg0").fadeOut(6000);
});

$(document).ready(function(){
    $(".svg").fadeIn(20000);
});


function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("Pb-container").style.display = "block";

    var acc = document.getElementsByClassName("container");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }

}

$(function(){  // $(document).ready shorthand
    $('#Page').fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.hideme').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},250);
                      
              }
              
          }); 
      
      });
      
  });
