$(document).ready(function(){
   $('.navbar-toggler').click(function(){
      $('#navbarSupportedContent').slideToggle(300);
   });
    $(".upload-button").on('click', function() {
        $(".file-upload").click();
    });
});