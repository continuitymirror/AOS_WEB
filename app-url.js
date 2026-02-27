/**
 * Set your deployed AOS app URL here. Both "Enter" and "Access the index" links use this.
 * Example: 'https://your-aos-app.pages.dev' or 'https://aos.example.com'
 */
const APP_URL = '#';

(function () {
  const links = document.querySelectorAll('#cta-enter, #cta-enter-footer');
  links.forEach(function (el) {
    el.href = APP_URL;
  });
})();
