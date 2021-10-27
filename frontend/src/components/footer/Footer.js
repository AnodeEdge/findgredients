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
                        <span> About the website</span> This website was developed as a personal project using the Edamam API and React, Node, Express, and MongoDB.
                        <span></span>
                        <span> © 2021 by Scott Curtis</span>
                    </p>
                </div>
                <div className="footer-center col-md-4 col-sm-6">
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h2> Recip<span>!</span>ease</h2>
                    <p className="menu">
                        <div>
                            <a href="https://www.scott-curtis.com"> Personal Website</a>
                        </div>
                        <div>
                            <a href="">LinkedIn</a>
                        </div>
                        <div>
                            <a href="">GitHub</a>
                        </div>
                    </p>
                    <p className="name"> Scott Curtis &copy; 2021</p>
                </div>
            </footer>
        </>
    )
}

export default Footer

