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

$(window).on("load", function() {
    // setTimeout(removeloader, 200);
    $("#loader").fadeOut(2000);
});