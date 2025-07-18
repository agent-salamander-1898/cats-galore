/*
 * Script for basic interactivity on the Cats Galore shop.
 * Adds simple event handlers for demonstration purposes only.
 */

document.addEventListener('DOMContentLoaded', function () {
  // Attach click handlers to each “Add to Cart” button
  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      // In a real shop this would add the item to a cart.
      alert('Added to cart! (This demo has no backend implementation.)');
    });
  });

  // Handle contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting us! We will get back to you soon.');
      contactForm.reset();
    });
  }
});