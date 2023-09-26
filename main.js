$(document).ready(function(){
    $("#Svg0").fadeOut(6000);
});

$(document).ready(function(){
    $(".svg").fadeIn(20000);
});

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("Pb-container").style.dislpay = "block";

    var acc = document.getElementByClassName("container");
    var i;

    for(i = 0; i < acc.length; i++) {
        acc[i].addEventListener.("click", function() {
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
