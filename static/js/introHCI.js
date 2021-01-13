$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("Ted knows JavaScript!");
            });
            $("#testjs").click(projectClick);
}

function projectClick(e) {
    // prevent the page from reloading
    e.preventDefault();
    // In an event handler, $(this) refers to
    // the object that triggered the event
    $('.jumbotron').css("background","#a770ef");
    $('.jumbotron').css("background","#-webkit-linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)");
    $('.jumbotron').css("background","linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)");
    document.body.style.backgroundColor = "gainsboro";
}
