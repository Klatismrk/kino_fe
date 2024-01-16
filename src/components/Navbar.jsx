import React, {useEffect, useState} from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {

    const [click, setClick] = useState(false);
    const prihlasen = props.prihlasen;
    const loggedIn = props.loggedIn;
    const prihlasenId = props.prihlasenId;

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const handleLogout = () => {
        localStorage.setItem('token', "");
    };

    useEffect(() => {
        // Tato část kódu se spustí pokaždé, když se změní 'prihlasen'
        console.log("Aktualizace Navbaru s prihlasen:", prihlasen);
    }, [prihlasen]);

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
                        {loggedIn && <Link to={"/rezervace"} className={"nav-links"} onClick={closeMobileMenu}>
                            Rezervace
                        </Link>}
                    </li>
                    <li className={"nav-item"}>
                        {prihlasen === "admin" &&
                            <Link to={"/uzivatele"} className={"nav-links"} onClick={closeMobileMenu}>
                                Uživatelé
                            </Link>}
                    </li>
                    <li className={"nav-item"}>
                        {prihlasen === "uzivatel" &&
                            <Link to={"/uzivatel/" + prihlasenId} className={"nav-links"} onClick={closeMobileMenu}>
                                Uživatel
                            </Link>}
                    </li>
                    {!loggedIn && <li className={"nav-item"}>
                        <Link to={"/prihlaseni"} className={"nav-links"} onClick={closeMobileMenu}>
                            Přihlásit
                        </Link>
                    </li>}
                    {!loggedIn && <li className={"nav-item"}>
                        <Link to={"/registrace"} className={"nav-links"} onClick={closeMobileMenu}>
                            Registrovat
                        </Link>
                    </li>}
                    {loggedIn && <li className={"nav-item"}>
                        <Link to={"/"} className={"nav-links"} onClick={() => {
                            closeMobileMenu();
                            handleLogout();
                            props.logOff();
                        }}>
                            Odhlásit
                        </Link>
                    </li>}
                </ul>

            </div>
        </nav>
        </>
    );
}

export default Navbar;