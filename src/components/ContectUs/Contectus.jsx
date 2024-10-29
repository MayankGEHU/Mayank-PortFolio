import React from "react";
import { useNavigate } from "react-router-dom";
import '../ContectUs/Contectus.css';

function Contectus() {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div>
            <div className="ContectUsFormHeader">
                <button className="CloseButton" onClick={handleClose}>✕</button>
            </div>
            <hr className="closeButtonHr" />
            <div className="MainContainerContectUsForm">
                <div className="ContectUsFormContainer">
                    <div className="ContectUsFormLeftSection">
                        Hi, this is the left section.
                    </div>
                    <div className="ContectUsFormRightSection">
                        <h1>Contact Us</h1>
                        <p>We’d love to hear from you! Please fill out the form below:</p>
                        <form className="ContactForm">
                            <input type="text" placeholder="Name" className="InputField" />
                            <input type="email" placeholder="Email" className="InputField" />
                            <textarea placeholder="Message" className="MessageBox" />
                            <button type="submit" className="SubmitButton">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contectus;
