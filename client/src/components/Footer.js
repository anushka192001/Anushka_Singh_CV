import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/profile.php?id=100007441088302'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/anushkasingh1606/'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
           
            <a
              class='social-icon-link twitter'
              href='https://in.linkedin.com/in/anushka-singh-a1b6a0344'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
