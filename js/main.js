document.addEventListener("DOMContentLoaded", function() {
  const about = document.getElementById("about");
  const aboutpage = document.getElementById("aboutpage");

  about.addEventListener("click", function() {
      // Scroll to the target element
      aboutpage.scrollIntoView({ behavior: "smooth" });
  });
});