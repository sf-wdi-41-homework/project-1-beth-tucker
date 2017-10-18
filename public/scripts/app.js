//Client-side JAVASCRIPT

$(document).ready(function() {
  console.log('app.js loaded!');


  // on load adding all items
  $.ajax({
    method: "GET",
    url: "/api/todos",
    success: function (json){
      var allTodos = json;
      console.log(allTodos);


      // stretch goal -- make a forEach loop

      for (var i = 0; i < allTodos.length; i++) {
        console.log(allTodos[i].description);
        renderTodo(allTodos[i]);
      }
    }
  });

  // strike through to do item & hide
  $('#todoList').on('click', '.close', function(e){
    $(e.target).parent().addClass("hide");
  })

// remove a to do item
$('#todoList').on('click', '.markDone', function(e){
  $(e.target).addClass("strike");
})


//Update render todos based off of list selection

  $('#listDropDown').on('click', function(e){
    e.preventDefault();
    console.log(e);

  })



// submit functionality for item in modal
  $('#NewToDo').on('submit', function(e){
    e.preventDefault();
    var formData = $(this).serialize();
    console.log(formData);
    $.post('/api/todos', formData, function(todo){
      renderTodo(todo);
    })
    //reset form input values after formData has been captured
    $(this).trigger("reset");
  });

//this function will actually render items with 'X' to remove
  function renderTodo(todo) {
    $('#todoList').prepend(
      `<li class="liToDo"><a class="markDone" href="#">${todo.description}</a><span class="close">x</span></li>`
    );
  };



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
  };

});
