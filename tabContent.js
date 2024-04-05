// Get all the anchor tags inside the tab content
const tabLinks = document.querySelectorAll(".Tab_content a");

// Loop through each anchor tag
tabLinks.forEach((link) => {
  // Add a click event listener to each anchor tag
  link.addEventListener("click", function (event) {
    // Remove the 'text-success' class from all anchor tags
    tabLinks.forEach((link) => {
      link.classList.remove("text-success");
    });
    // Add the 'text-success' class to the clicked anchor tag
    this.classList.add("text-success");
  });
});
