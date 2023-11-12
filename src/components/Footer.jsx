import React from 'react';
import { navLinks } from "../constants";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* Background Section */}
      <div className="footer-bg"></div>

      {/* Main Content Section */}
      <div className="footer">
        <p>&copy; {currentYear} The Power Project. All rights reserved.</p>

        <div className="quick-links">
          <p>Quick Links:</p>
          <ul>
            {navLinks.map(({ id, title }, index) => (
              <li key={id}>
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
