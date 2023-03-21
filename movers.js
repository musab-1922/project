// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to all links that have a hash (#) in the href attribute
    var links = document.querySelectorAll("a[href^='#']");
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        // Get the target element from the href attribute
        var targetId = link.getAttribute("href").slice(1);
        var target = document.getElementById(targetId);
        // Scroll to the target element
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  