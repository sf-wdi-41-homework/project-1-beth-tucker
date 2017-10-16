//Client-side JAVASCRIPT

$(document).ready(function() {
  console.log('app.js loaded!');


  $.ajax({
    method: "GET",
    url: "/",
    success: onSuccess,
    error: onErr
  });

});
