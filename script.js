//Please put your answer here
var signButton = $(".signup-show");
var modal = $('#signup-modal');
var closeButton = $('#close-modal');

closeButton.click(function() {
    '#signup-modal'.slideUp(1000);
});

signButton.click(function() {
    '#signup-modal'.slideDown(1000);
});