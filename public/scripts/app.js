//Client-side JAVASCRIPT

$(document).ready(function() {
  console.log('app.js loaded!');


  // $.ajax({
  //   method: "GET",
  //   url: "/",
  //   success: onSuccess,
  //   error: onErr
  // });

// modal functionality

  // New To Do Modal
  // Get the modal
  var toDoModal = document.getElementById('myModal');
  // Get the button that opens the modal
  var toDoBtn = document.getElementById('toDoBtn');
  // Get the <span> element that closes the modal
  var toDoSpan = document.getElementsByClassName("close")[0];
  // When the user clicks on the button, open the modal
  toDoBtn.onclick = function() {
      toDoModal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  toDoSpan.onclick = function() {
      toDoModal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == toDoModal) {
          toDoModal.style.display = "none";
      }
  }

  // // New List Modal
  // // Get the modal
  // var modal = document.getElementById('myModal');
  // // Get the button that opens the modal
  // var btn = document.getElementById('toDoBtn');
  // // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];
  // // When the user clicks on the button, open the modal
  // btn.onclick = function() {
  //     modal.style.display = "block";
  // }
  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //     modal.style.display = "none";
  // }
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //     if (event.target == modal) {
  //         modal.style.display = "none";
  //     }
  // }


});
