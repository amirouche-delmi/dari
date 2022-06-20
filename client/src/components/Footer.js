import React from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_tsr20np", 
            "template_6z6hkx8", 
            e.target,
            "user_Rslsuagu52MiP076w9RNv"
        ).then(res => {})
        .catch(err => console.log(err))
    }
    return (
        <div className="footer">
            <footer>
                <div className="main-content">
                    <div className="left box">
                        <h2>A PROPOS DE NOUS</h2>
                        <div className="content">
                            <p>Nous sommes deux étudiants qui ont crée un site web dans le domaine de l'immobilier nomée DARI dans le cadre du projet de fin d'études Licence</p>
                            <div className="social">
                                <a href="http://www.facebook.com"><span className="fab fa-facebook"></span></a>
                                <a href="http://www.twitter.com"><span className="fab fa-twitter"></span></a>
                                <a href="http://www.instagram.com"><span className="fab fa-instagram"></span></a>
                                <a href="https://www.youtube.com"><span className="fab fa-youtube"></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="center box">
                        <h2>Adresse</h2>
                        <div className="content">
                            <div className="place">
                                <span className="fas fa-map-marker-alt"></span>
                                <span className="text">Bab Ezzouar, Algeria</span>
                            </div>
                            <div className="phone">
                                <span className="fas fa-phone-alt"></span>
                                <span className="text"><a href="tel:0672131487">06 72 13 14 87</a></span>
                            </div>
                            <div className="email">
                                <span className="fas fa-envelope"></span>
                                <span className="text"><a href="mailto:dari@gmai.com">dari@gmail.com</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="right box">
                        <h2>Nous Contacter</h2>
                        <div className="content">
                            <form onSubmit={sendEmail}>
                                <div className="email">
                                    <div className="text">Email *</div>
                                    <input className="email" name="email" required />
                                </div>
                                <div className="msg">
                                    <div className="text">Message *</div>
                                    <textarea name="msg" rows="2" cols="25" required ></textarea>
                                </div>
                                <div className="btn">
                                    <button type="submit">Envoyer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <center>
                        <span className="credit">Crée par <a href="/about" target="_blank">Amirouche & Yacine</a> | </span>
                        <span className="far fa-copyright"></span><span> 2021 Tous les droits réservés.</span>
                    </center>
                </div>
            </footer>
        </div>
    );
};

export default Footer;