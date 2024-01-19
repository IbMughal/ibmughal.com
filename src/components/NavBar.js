import { Navbar, Container } from "react-bootstrap"
import { useState } from "react"

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState (false);

    return (
        <nav class="navbar" style="background-color: #FFFFFF;">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={/src/assets/"favicon 1.png"} alt = "Ibrahim Hassan-Mughal"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">HOME</a>
                        <a class="nav-link" href="#">WORK</a>
                        <a class="nav-link" href="#">CONTACT</a>
                        <a class="nav-link" href="#">ABOUT</a>
                    </div>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a class = "nav-link" href="#"> <img src=""/> </a>
                            <a class = "nav-link" href="#"> <img src=""/> </a>
                            <a class = "nav-link" href="#"> <img src=""/> </a>
                        </div>
                        <button> className="vvd" onClick={() => console.log ('connect')}<span>CONTACT</span></button>
                    </span>
                </div>
            </div>
        </nav>
    )
}