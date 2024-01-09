import React, {useState} from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className={"navbar"}>
            <div className={"navbar-container"}>

                <Link to={"/"} className={"navbar-logo"} onClick={closeMobileMenu}>
                    Logo
                </Link>

                <div className={"menu-icon"} onClick={handleClick}>
                    <i className={click ? "fa fa-times" : "fa fa-bars"} />
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className={"nav-item"}>
                        <Link to={"/"} className={"nav-links"} onClick={closeMobileMenu}>
                            Úvod
                        </Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/filmy"} className={"nav-links"} onClick={closeMobileMenu}>
                            Filmy
                        </Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/predstaveni"} className={"nav-links"} onClick={closeMobileMenu}>
                            Vysíláme
                        </Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/rezervace"} className={"nav-links"} onClick={closeMobileMenu}>
                            Rezervace
                        </Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/uzivatele"} className={"nav-links"} onClick={closeMobileMenu}>
                            Uživatelé
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
        </>
    );
}

export default Navbar;