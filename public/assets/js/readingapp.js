$(function() {
    $(".markRead").on("click", function(event) {      
      let id = $(this).data("id");  
      let readState = {
      read: true
      };        
      // Send the PUT request.
      $.ajax(`/api/books/${id}`, {
        type: "PUT",
        data: readState
      }).then(
        function(){
          location.reload(true);
        }
      );           
    });
    $(".addBook").on("click", function(event) {
      event.preventDefault();
      let newBook = {
        title: $("#title").val().trim(),
        firstName: $("#firstName").val().trim(),
        lastName: $("#lastName").val().trim(),
      };
      //Send POST Request
      $.post("/api/books", newBook, (req, res) => {              
        location.reload(true);
      })
    });
    $(".delete").on("click", function(event) {      
      let id = $(this).data("id");    
      // Send the DELETE request.
      $.ajax({
        url: `/api/books/${id}`, 
        method: "DELETE",
        success: function(response){          
          location.reload(true);
        }
      })
    });
  });