function myFunction(x) {
    x.classList.toggle("change");
}

$(document).ready(function() {
    $(".nav-bar").hide();
});
$(document).ready(function() {
    $(".container").click(function() {
        $(".nav-bar").toggle("slow");

    });

});

$(document).bind("contextmenu", function(e) {
    return false;
});

$(window).on("load", function() {
    $("#loader").fadeOut(2000);
});
