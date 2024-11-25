function services (description, price){
  this.description = description;
  this.price = price;

}

$(document).ready(function () {
  let total = 0; 

  
  $("#selectServe").on("change", function () {
      const selectedOption = $(this).find(":selected"); 
      const serviceText = selectedOption.text(); 
      const serviceValue = parseFloat(selectedOption.val());

      if (!isNaN(serviceValue)) { 
          
          $("#cart").append(`<p>${serviceText}</p>`);

          
          total += serviceValue;
          $("#total").text(`Total: $${total.toFixed(2)}`).css("color", "black");
      }
  });

  
  $("#checkout").on("click", function () {
      if ($("#cart").children().length === 0) {
          $("#total")
              .text("Error: Add at least one service before checking out!")
              .css("color", "red");
      } 
  });
});
