import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-section-wrapper grid grid-col-1 container">
        <div className='footer-section-1'>
          <div className="footer-logo">
            <img src="public\img\imgi_1_logo-CMLzTNjw.svg" alt="logo" />
          </div>
          <div className="footer-paragraph">
            <p>We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</p>
          </div>
        </div>

        <div className='footer-section-2 flex'>
          <div className="link-section">
            <h2>Quick Links</h2>
            <ul className='flex footer-sec-2-list'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Best Seller</a></li>
              <li><a href="#">Offers & Deals</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div className="help-section">
            <h2>Need help?</h2>
            <ul className='flex footer-sec-2-list'>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Return & Refund Policy</a></li>
              <li><a href="#">Payment Methods</a></li>
              <li><a href="#">Track your Order</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="follow-us-section">
            <h2>Follow Us</h2>
            <ul className='flex footer-sec-2-list'>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div className='container copy-right-section'>
        <p>Copyright 2025 © GreatStack.dev All Right Reserved.</p>
      </div>
    </footer>
  )
}
