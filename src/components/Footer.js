import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import twitter from "../assets/twitter.svg";

function Footer() {

    return (
        <div className="footer">
            <p className="footer-first block">This site was created by Julie Ann Meng <br />Feel free to view it on GitHub HERE</p>
            <div className="footer-middle block">
                <a href="https://github.com/JulieAnnMeng"><img className="contact-icons" src={github} /></a>
                <a href="https://www.linkedin.com/in/julieannmeng/"><img className="contact-icons" src={linkedin} /></a>
                <a href="mailto:JulieAnnMeng@gmail.com"><img className="contact-icons" src={mail} /></a>
                <a href="https://twitter.com/JulieAnnMeng"><img className="contact-icons" src={twitter} /></a>
            </div>
            <p className="footer-last block">(C) Julie Ann Meng 2022</p>
        </div>
    );
}

export default Footer;