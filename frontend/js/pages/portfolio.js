  $(document).ready(function() {
    $('.img-hover-wrapper').hover(
      function() {
        $(this).find('.hover-img').addClass('hover-up');
      },
      function() {
        $(this).find('.hover-img').removeClass('hover-up');
      }
    );
  });