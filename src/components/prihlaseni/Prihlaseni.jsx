import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Prihlaseni = ({logIn}) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [heslo, setHeslo] = useState('');

    const handlePrihlaseni = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/prihlaseni', { login: login, heslo: heslo });
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log('sem prihlasen ' + token);
            logIn();
            navigate("/")
        } catch (error) {
            console.error('Přihlášení selhalo', error);
        }
    };

    const handlePrihlaseniAdmin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/prihlaseni', { login: "admin", heslo: "admin" });
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log('sem prihlasen ' + token);
            logIn();
            navigate("/")
        } catch (error) {
            console.error('Přihlášení selhalo', error);
        }
    };

    const handlePrihlaseniUzivatel = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/prihlaseni', { login: "fanda", heslo: "heslo" });
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log('sem prihlasen ' + token);
            logIn();
            navigate("/")
        } catch (error) {
            console.error('Přihlášení selhalo', error);
        }
    };

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"card"}>
                        <div className={"card-body text-center"}>
                            <h2 className={""}>Přihlášení</h2>
                            <div className={"mt-4"}>
                                <div className={"mb-3"}>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Uživatelské jméno"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                                </div>
                                <div className={"mb-3"}>
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="Heslo"
                                    value={heslo}
                                    onChange={(e) => setHeslo(e.target.value)}
                                />
                                </div>
                                <button className={"btn btn-primary"} onClick={handlePrihlaseni}>Přihlásit se</button>
                            </div>
                            <div className={"d-flex justify-content-around mt-4"}>
                                <button className={"btn btn-primary"} onClick={handlePrihlaseniAdmin}>
                                    admin
                                </button>
                                <button className={"btn btn-primary"} onClick={handlePrihlaseniUzivatel}>
                                    uzivatel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prihlaseni;
