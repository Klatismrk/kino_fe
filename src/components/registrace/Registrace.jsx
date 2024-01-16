import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Registrace(props) {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [heslo, setHeslo] = useState('');
    const [jmeno, setJmeno] = useState('');

    const handleRegistrace = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/registrace', { login: login, heslo: heslo, jmeno: jmeno });
            console.log('registrován:  ' + response);
            alert('Registrován: ' + jmeno + '\n\nLogin: ' + login + '\n\nHeslo: ' + heslo);
            navigate("/")
        } catch (error) {
            console.error('registrace selhala', error);
        }
    };

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"card"}>
                        <div className={"card-body text-center"}>
                            <h2 className={""}>Registrace</h2>
                            <div className={"mt-4"}>
                                <div className={"mb-3"}>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Jméno"
                                        value={jmeno}
                                        onChange={(e) => setJmeno(e.target.value)}
                                    />
                                </div>
                                <div className={"mb-3"}>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Login"
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
                                <button className={"btn btn-primary"} onClick={handleRegistrace}>Registrovat se</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registrace;