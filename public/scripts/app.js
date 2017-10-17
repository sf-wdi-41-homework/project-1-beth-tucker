//Client-side JAVASCRIPT

$(document).ready(function() {
  console.log('app.js loaded!');


  $.ajax({
    method: "POST",
    url: "/api/todos",
    data: $('#NewToDo').serialize(),
    success: postNewTodoSuccess,
    error: postNewTodoErr
  });

    function postNewTodoSuccess(responseData) {
      console.log("created new todo!");
      console.log("the new name of the new todo is ", responseData.todo_name);
      //renders a new todo
    }

    function postNewTodoErr(err){
      console.log("There was an error ", err);
    }

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

  // New List Modal
  // Get the modal
  var newListModal = document.getElementById('listModal');
  // Get the button that opens the modal
  var newListBtn = document.getElementById('newListBtn');
  // Get the <span> element that closes the modal
  var newListSpan = document.getElementById('newListClose')[0];
  // When the user clicks on the button, open the modal
  newListBtn.onclick = function() {
      newListModal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  newListClose.onclick = function() {
      newListModal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == newListModal) {
          newListModal.style.display = "none";
      }
  }


});
