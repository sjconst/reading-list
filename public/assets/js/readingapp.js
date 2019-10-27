$(function() {
    $(".markRead").on("click", function(event) {      
      let id = $(this).data("id");  
      let readState = {
      read: true
      };        
      // Send the PUT request.
      $.ajax(`/api/books/${id}`, {
        type: "PUT",
        data: readState,
        dataType: "text"
      }).then(
        function(){
          console.log('success');
          window.location.reload()
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
        console.log("Book added");       
      }).then(function() {
        window.location.reload();
      });
    });
    $(".delete").on("click", function(event) {      
      let id = $(this).data("id");    
      console.log(id + " in readingapp")       
      // Send the DELETE request.
      $.ajax({
        url: `/api/books/${id}`, 
        method: "DELETE",
        success: function(response){
          window.location.reload();
        }
      })
    });
  });