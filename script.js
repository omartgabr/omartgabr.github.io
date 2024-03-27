

/******************************* DROPDOWN BUTTON ***********************************/ 
// Get the button and the dropdown content
var dropdown = document.getElementById("dropdown-list");
var dropdownButton = document.querySelector(".dropdown-button");

// Toggle the dropdown list on click
dropdownButton.onclick = function() {
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
};

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
};


/******************************* D ***********************************/ 

