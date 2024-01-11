import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="social-media">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <div className="other-items">
                <ul>
                    <li>Sobre</li>
                    <li>Contatos</li>
                    <li>Política de Privacidade</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
