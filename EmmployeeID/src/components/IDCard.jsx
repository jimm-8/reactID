import React from 'react';
import './IDCard.css';
import logo from '../assets/logo.png';  // Use relative path to assets
import bg from '../assets/img-bg.png';
import userImg from '../assets/img1.png';

const IDCard = () => {
    return (
        <div className="id-container">
            <div className="id-front">
                <div className="id-header">
                    <div className="id-header-left">
                        <img src={logo} alt="logo" className="id-logo" />
                    </div>
                    <div className="id-header-right">
                        <h1 className="id-title">St.JohnMajore</h1>
                        <p className="id-subtitle">#8 De Villa St., Poblacion, San Juan, Batangas</p>
                    </div>
                </div>
                <div className="id-content" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="user-img">
                        <img src={userImg} alt="user" className="user-img" />
                    </div>
                    <div className="user-info">
                        <p className="user-id">ID NO. M-XXXXX</p>
                        <p className="user-name">JIM MARIEL CASTILLO</p>
                        <p className="user-position">Frontend Developer</p>
                    </div>
                    <div className="user-signature">Signature</div>
                </div>
            </div>

            <div className="id-back">
                <div className="id-content-back" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="user-info-back">
                        <p className="address">505 Kalyeng Putol, Maraykit, San Juan,<br /> Batangas</p>
                        <p className="sss">SSS: XX-XXXXXXX-X</p>
                        <p className="tin">TIN: XXX-XXX-XXX</p>
                        <p className="philhealth">PHILHEALTH: XXXXXXXXXXXX</p>
                        <p className="pagibig">PAGIBIG: XXXX-XXXX-XXXX</p>
                        <p className="bday">DATE OF BIRTH: December 08, 2003</p>
                    </div>
                    <div className="emergency">
                        <p className="emergency-title">In case of emergency, please notify:</p>
                        <p className="emergency-name">MARILOU CASTILLO</p>
                        <p className="emergency-contact">09123456789</p>
                        <p className="emergency-address">505 Kalyeng Putol, Maraykit, San Juan,<br /> Batangas</p>
                    </div>
                    <div className="hr">
                        <p className="hr-name">MIA MARY SORA</p>
                        <p className="hr-title">Human Resources Department Head</p>
                    </div>
                </div>
                <div className="id-footer">
                    <div className="id-footer-left">
                        <img src={logo} alt="logo" className="footer-logo" />
                    </div>
                    <div className="id-footer-right">
                        <p className="footer-title">St.JohnMajore Services Company Inc.</p>
                        <p className="footer-subtitle">#8 De Villa St., Poblacion, San Juan, Batangas</p>
                        <p className="contact">+043 5755675 | 0917 1851909</p>
                        <p className="email">sjmajore@gmail.com</p>
                    </div>
                </div>
            </div>
            <button id="download-pdf">Download as PDF</button>
        </div>
    );
};

export default IDCard;
