//Client-side JAVASCRIPT

$(document).ready(function() {
  console.log('app.js loaded!');

  $('#todoList').on('click', '.close', function(e){
    $.ajax({
      method: "DELETE",
      url: "/api/todos/" + $(this).attr('_id'),
      success: deleteTodoSuccess,
      error: deleteTodoError
    });
  });
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
    var id = $(this).attr("class");
    console.log(id);
    console.log(this);
    console.log("TARGET", e.target);
    console.log($(this).attr("data-id"));
    console.log(selected);

    $.ajax({
      method: "GET",
      url: `/api/lists/${selected}`,
      // json is all to dos that match list selection
      success: function(json){
        // call remove once and then call render for each item returned in JSON
        removeTodos();
        console.log(json._id);
        var specificToDos = json.todos;
        $('#emptyList').remove();
        $('#loadText').remove();
        $('#toDoBtn').removeClass('hide');
        $('#todoModalHeader').html('Add a new to do to '+selected);
        $('#todoModalHeader').wrap('<h4>');
        $('#todoListHeader').html('To Do Items on ' +selected);
        $('#listIdInput').val(json._id);
        for(var i=0; i < specificToDos.length; i++) {
          renderTodo(specificToDos[i]);
        }
      },
      error: function(a, b, c){
        console.log(b);
        console.log(c);
      }

    })


    //end of doc.ready
  });

  function deleteTodoSuccess(json) {
  var todo = json;
  console.log(json, "Item has been deleted");
  var todoId = todo._id;

}
function deleteTodoError(){
  console.log('Delete failed');
}

  // to do functionality (remove, complete)
  $('#todoList').on('click', '.markDone', function(e){
    $(e.target).wrap("<strike>");
    $(e.target).removeAttr("href");
    $(e.target).parent().addClass("crossOut");
  });

  //strike through to do item & hide
  $('#todoList').on('click', '.close', function(e){
    $(e.target).parent().addClass("hide");
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

// this function will remove all rendered To Dos -- we do this for new list selection
function removeTodos(todo) {
  $('#todoList').empty(".liToDo");
}

//this function will actually render items with 'X' to remove
  function renderTodo(todo) {
    $('#todoList').prepend(
      `<li class="liToDo"><a class="markDone" href="#">${todo.description}</a><span _id="${todo._id}"class="close">x</span></li>`
    );
  };

//this function will display the list selected in the dropdown list
  function renderList(list) {
    $('#listDropDown').append(
      `<option class="list" data-id="${list._id}">${list.listName}</option>`
    );
    $('#activeLists').append(
      `<img class="trash" src="/images/trash-can.png">`
    );
    $('#activeLists').append(
      `<option data-id="${list._id}">${list.listName}</option>`
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
