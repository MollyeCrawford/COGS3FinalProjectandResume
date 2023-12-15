
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add 'active' class to elements when they're in the viewport
function addActiveClass() {
  var elements = document.querySelectorAll('.animate');
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('active');
    }
  });
}

// Event listener to trigger animation when scrolling
window.addEventListener('scroll', addActiveClass);

// Trigger the function on initial load
addActiveClass();

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 50 // Adjust for navbar height
  }, 500);
});
$(document).ready(function () {
  // Target the navbar
  var navbar = $('.navbar');

  // Add Bootstrap classes to create a responsive layout with 3 columns
  navbar.addClass('col-lg-12 col-md-12 col-sm-12');

  // Optionally, align the navbar items to the left
  navbar.find('.navbar-nav').addClass('justify-content-start');
});

