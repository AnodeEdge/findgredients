import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span> About the website</span> This website was developed as a personal project using React and Node.
                    </p>
                    <div className="icons">
                        <FontAwesomeIcon icon={['fab', 'apple']} />
                        {/* <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a> */}
                    </div>
                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span> Street name and number</span> City, Country</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> (+00) 0000 000 000</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="https://www.scott-curtis.com"> scott-curtis.com</a></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h2> F<span>indgredients</span></h2>
                    <p className="menu">
                        {/* <a href="#"> Home</a> |
                        <a href="#"> About</a> |
                        <a href="#"> Services</a> |
                        <a href="#"> Portfolio</a> |
                        <a href="#"> News</a> |
                        <a href="#"> Contact</a> */}
                    </p>
                    <p className="name"> Scott Curtis &copy; 2021</p>
                </div>
            </footer>
        </>
    )
}

export default Footer

