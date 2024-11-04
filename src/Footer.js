import logo from './assets/Logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className="company-links">
                <div>
                <img src={logo} alt="logo"></img>
                </div>
                <div className="company-navigation">
                    <p className="navigation-title">Navigation</p>
                    <ul className="navigation-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div className="company-contact">
                    <p className="contact-title">Contact</p>
                    <ul className="contact-list">
                        <li>Address: Michigan Avenue No 123</li>
                        <li>Phone Number: 734 566 788</li>
                        <li>Email: little@lemon.com</li>
                    </ul>
                </div>
                <div className="social-media">
                    <p className="socialmedia-title">Social Media</p>
                    <ul className="socialmedia-list">
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">𝕏</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;