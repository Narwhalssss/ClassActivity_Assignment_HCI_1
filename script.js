//Please put your answer here
var signButton = $(".signup-show");
var modal = $('#signup-modal');
var closeButton = $('#close-modal');

closeButton.click(function() {
    modal.hide(1000);
});

signButton.click(function() {
    modal.show(1000);
});