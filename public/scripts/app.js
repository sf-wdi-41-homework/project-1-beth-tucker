//Client-side JAVASCRIPT

$(document).ready(function() {
  console.log('app.js loaded!');


  // on load render all todos
  $.ajax({
    method: "GET",
    url: "/api/todos",
    success: function (json){
      var allTodos = json;
      console.log(allTodos);
      // stretch goal -- make a forEach loop
      for (var i = 0; i < allTodos.length; i++) {
        console.log(allTodos[i].description);
        //if _list property of todo ===
        renderTodo(allTodos[i]);
      }
    }
  });

  // on load render all lists
  $.ajax({
    method: "GET",
    url: "/api/lists",
    success: function (json){
      var allLists = json;
      console.log(allLists);
    for (var i = 0; i < allLists.length; i++)  {
      renderList(allLists[i]);
      }
    }
  });

  //Update render todos based off of list selection

  $('select').on('change', function(e) {
    var selected = this.value;
    var id = $(this).data('id');
    console.log(this);
    console.log(selected);
    console.log(id);

    $.ajax({
      method: "GET",
      url: `/api/lists/${selected}`,
      success: function(json){
        console.log(json);
      },
      error: function(a, b, c){
        console.log(b);
        console.log(c);
      }

    })
  });

  // to do functionality (remove, complete)
  $('#todoList').on('click', '.markDone', function(e){
    $(e.target).addClass("strike");
    $(e.target).removeAttr("href");
  });

  // strike through to do item & hide
  $('#todoList').on('click', '.close', function(e){
    $(e.target).parent().addClass("hide");
  })

  // remove a to do item
  $('#todoList').on('click', '.markDone', function(e){
    $(e.target).addClass("strike");
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

  $('#NewList').on('submit', function(e){
    e.preventDefault();
    var formData = $(this).serialize();
    console.log(formData);
    $.post('/api/lists', formData, function(list){
      renderList(list);
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

//this function will display the list selected in the dropdown list
  function renderList(list) {
    $('#listDropDown').append(
      `<option class="list" data-id="${list._id}">${list.listName}</option>`
    );
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
  };


  // New List Modal
  // Get the modal
  var listModal = document.getElementById('listModal');
  // Get the button that opens the modal
  var listBtn = document.getElementById('ListBtn');
  // Get the <span> element that closes the modal
  var listSpan = document.getElementsByClassName("closeList")[0];
  // When the user clicks on the button, open the modal
  listBtn.onclick = function() {
      listModal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  listSpan.onclick = function() {
      listModal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == listModal) {
          listModal.style.display = "none";
      }
  };

});
