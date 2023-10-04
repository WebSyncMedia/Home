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


  var cursor = document.querySelector('.cursor');
  var cursorinner = document.querySelector('.cursor2');
  var a = document.querySelectorAll('a');
  
  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  });
  
  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
  });
  
  document.addEventListener('mousedown', function(){
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
  });
  
  document.addEventListener('mouseup', function(){
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
  });
  
  a.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })
