// js/components/layout.js
$(document).ready(function () {
  // Load header
  $("#header-placeholder").load("components/header.html", function () {
    console.log("Header loaded successfully");
  });

  // Load footer
  $("#footer-placeholder").load("components/footer.html", function () {
    console.log("Footer loaded successfully");
  });
});
