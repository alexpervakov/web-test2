import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialLinks = () => {
    return (
        <div>
            <h2>Follow Disney on:</h2>
            <div>
                <a href="https://facebook.com/disney" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon="fa-brands fa-facebook" /> Facebook
                </a>
                <br />
                <a href="https://instagram.com/disney" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" /> Instagram
                </a>
                <br />
                <a href="https://twitter.com/disney" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon="fa-brands fa-x-twitter" /> Twitter
                </a>
                <br />
                <a href="https://youtube.com/disney" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon="fa-brands fa-youtube" /> YouTube
                </a>
            </div>
            <div style={{ marginTop: '20px' }}>
                {/* Placeholder for Disney logo */}
                <img src="/images/disney_logo.png" alt="Disney Logo" width="200" height="100" />
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3>Additional Links</h3>
                <ul>
                    <li><a href="help">Help</a></li>
                    <li><a href="sign Up">Sign Up</a></li>
                    <li><a href="sitemap">Sitemap</a></li>
                    <li><a href="terms of use">Terms of Use</a></li>
                    <li><a href="UK & EU privacy rights">UK & EU Privacy Rights</a></li>
                    <li><a href="privacy policy">Privacy Policy</a></li>
                    <li><a href="cookie policy">Cookie Policy</a></li>
                    <li><a href="manage your cookie settings">Manage Your Cookie Settings</a></li>
                    <li><a href="interest-based ads">Interest-based Ads</a></li>
                    <li><a href="tax strategy statement">Tax Strategy Statement</a></li>
                    <li><a href="internet safety">Internet Safety</a></li>
                    <li><a href="about us">About Us</a></li>
                    <li><a href="the walt disney company">The Walt Disney Company</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SocialLinks