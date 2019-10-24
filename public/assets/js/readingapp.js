$(function() {
    $(".markRead").on("click", function(event) {
     let id = $(this).data("id");  
     let readState = $(this).data("read")
      // Send the PUT request.
      $.ajax(`/api/books/${id}`, {
        type: "PUT",
        data: readState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });