import { faFacebook, faGoogle, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section py-5'>
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer-logo">
                         <img src="https://i.ibb.co/9ZQ2QkQ/Group-1.png" alt="" />
                     </div>
                     <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
                     <FontAwesomeIcon icon={faFacebook} />
                     <FontAwesomeIcon icon={faInstagram} />
                     <FontAwesomeIcon icon={faGoogle} />
                     <FontAwesomeIcon icon={faTwitter} />
                     <FontAwesomeIcon icon={faYoutube} />
                     <p>Copyright&copy;2022 Medicom All Rights Reserved</p>
                </div>
                <div className="col-md-2">
                    <div className="quick-links-section">
                    <h5 className='secondary ms-md-4'>Quick Links</h5>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Our Pricing</a></li>
                        <li><a href="">Our Gallery</a></li>
                        <li><a href="">Appointment</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                    </div>
                    
                </div>
                <div className="col-md-2">
                    <ul className='mt-md-4'>
                        <li><a href="">Services</a></li>
                        <li><a href="">Our Doctors</a></li>
                        <li><a href="">Our Latest News</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5 className='secondary ms-md-4'>Opening Hours</h5>
                    <ul className='quick-links'>
                        <li><span>Mon- Tue </span>08:00 AM- 05:00 PM</li>
                        <li><span>Wed- Thu </span>09:00 AM- 06:00 PM</li>
                        <li><span>Fri- Sat </span>10:00 AM- 07:00 PM</li>
                        <li><span>Sunday </span>Emergency Only</li>
                        <li><span>Personal </span>Mon- 05:00 PM </li>
                    </ul>
                </div>
            </div>
             </div> 
         </div>
    );
};

export default Footer;