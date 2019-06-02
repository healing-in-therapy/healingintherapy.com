import { Link } from 'gatsby';
import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <Link to="/individuals">Individuals</Link>
          </li>
          <li>
            <Link to="/couples">Couples</Link>
          </li>
          <li>
            <Link to="/groups">Groups</Link>
          </li>
          <li>
            <Link to="/rehabilitation">Rehabilitation</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3>Follow</h3>

        <ul>
          <li>
            <a href="https://www.facebook.com/KaylaMachLMFT" rel="noopener noreferrer" target="_blank">Facebook</a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/kaylamach" rel="noopener noreferrer" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>

      <div>
        © {new Date().getFullYear()} Kayla Mach
      </div>
    </footer>
  );
}

export default Footer;
