// js/components/header.js
$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  const path = window.location.pathname.split("/").pop();
  $(".nav-link").each(function () {
    if ($(this).attr("href") === path) {
      $(this).addClass("active");
    }
  });
});
