import React from 'react';

function Footer() {
  return (
   
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="stylesheet" type="text/css" href="App.css" />
</head>
<footer class="footer">
  <div class="social-media">
    <h3 class="follow-us">Follow Us:</h3>
    <ul class="social-icons">
      <li>
        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
      </li>
      <li>
        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
      </li>
      <li>
        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
      </li>
      <h3 class="location">
        Location📍: Lusengeti Road, Industrial Area, Kenya.
      </h3>
    </ul>
  </div>
  <div class="content">
    <div class="middle-text">
      <ul class="icon-text">
        <li><i class="fas fa-check-circle"></i></li>
        <li>
          <p>
            We're committed to great food, great coffee, great service, an
            experience that will make your time with us fabulous.All visuals are
            serving suggestions only. Prices are quoted in Kenyan Shillings and
            inclusive of VAT.
          </p>
        </li>
      </ul>
    </div>
  </div>
  <div class="copyright">&copy; 2024 Chai Vevinah. All Rights Reserved.</div>
</footer>
  );
}

export default Footer;
