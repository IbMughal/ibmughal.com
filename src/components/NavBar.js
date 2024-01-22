import { Navbar, Container } from "react-bootstrap"
import { useState } from "react"
import logo from '../assets/favicon 1.png'
import navIcon1 from '../assets/navIcon1.png'
import navIcon2 from '../assets/navIcon2.png'
import navIcon3 from '../assets/navIcon3.png'
import { faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState (false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = ( value ) => {
        setActiveLink ( value );
    }

    return (
        <nav class="navbar" className={scrolled ? "scrolled": ""} style="background-color: #FFFFFF;">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt = "Ibrahim Hassan-Mughal"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" className="me-auto">
                        <a class="nav-link" aria-current="page" href="#home" classname={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</a>
                        <a class="nav-link" href="#work" classname={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work')}>WORK</a>
                        <a class="nav-link" href="#contact" classname={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>CONTACT</a>
                        <a class="nav-link" href="#about" classname={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>ABOUT</a>
                    </div>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"> <img src={faInstagram}/> </a>
                            <a href="#"> <img src={faTiktok}/> </a>
                            <a href="#"> <img src={faTwitter}/> </a>
                        </div>
                        <button> className="vvd" onClick={() => console.log ('connect')}<span>CONTACT</span></button>
                    </span>
                </div>
            </div>
        </nav>
    )
}