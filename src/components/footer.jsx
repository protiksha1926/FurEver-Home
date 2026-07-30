import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube,FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div>

            {/* logo */}
            <div>
                <h2>
                    Sccoby
                </h2>
                <p>
                     Your pet's second-best friend (after you!). We provide top-notch care, grooming, food & more.
                </p>
                <div>
                    <FaInstagram/>
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaYoutube/>
                </div>
            </div>

            {/* Quick links */}
            <div>
                <h3>
                    Quick Links
                </h3>
                <ul>
                    <li><a href=" / ">Home</a></li>
                    <li><a href=" / ">Services</a></li>
                    <li><a href=" / ">About Us</a></li>
                    <li><a href=" / ">Contact</a></li>
                </ul>
            </div>

            {/* Service */}
            <div>
                <h3>
                    Our Services
                </h3>
                <ul>
                    <li>Pet Groomin</li>
                    <li>Vet Consultation</li>
                    <li>Pet Food Delivery</li>
                    <li>Training and Boarding</li>
                </ul>
            </div>
            {/* Contact info */}
            <div>
                <h3>
                    Contact Us
                </h3>
                <ul>
                    <li>Email: support@Scooby.com</li>
                    <li>Phone: +91 98765 43210</li>
                    <li>Hours: Mon - Sat, 9AM - 7PM</li>
                    <li>Location: Navi Mumbai, India</li>
                </ul>
            </div>
            {/* Bottom Bar */}
            <div>
                @copyright developed by champion programmers | All rights reserved
            </div>
        </div>
    </footer>
  )
}

export default Footer