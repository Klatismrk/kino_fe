import React, { useState } from 'react';
import axios from 'axios';


const VytvorUzivatel = ({ onVytvor }) => {
    const [login, setLogin] = useState('');
    const [jmeno, setJmeno] = useState('');
    const [heslo, setHeslo] = useState('');
    const [role, setRole] = useState('');

    const handleAddEntity = () => {
        if (!login || !jmeno || !heslo || !role) {
            alert('Vyplňte všechny údaje.');
            return;
        }

        const newEntity = {
            login,
            jmeno,
            heslo,
            role,
        };

        // Odeslání dat na API pomocí POST požadavku
        axios.post('http://localhost:8080/api/uzivatel', newEntity, {
            headers: {
                Authorization: `Bearer ` + localStorage.getItem("token")
            }
        })
            .then(response => {
                // Zpracování odpovědi z API
                console.log('Uživatel byl úspěšně vytvořeno', response.data);
            })
            .catch(error => {
                // Zpracování chyby při odesílání na API
                console.error('Chyba při vytváření uživatele', error);
            });

        // Vyčištění polí po přidání
        setJmeno('');
        setLogin('');
        setHeslo('');
        setRole('');
        alert('Vytvořeno');
        onVytvor();
    };

    return (
        <>
            <form className={"mt-4"}>
                <div className={"mb-3"}>
                    <label className="form-label">Jméno:</label>
                    <input className="form-control" type="text" value={jmeno}
                           onChange={(e) => setJmeno(e.target.value)}/>
                </div>
                <div className={"mb-3"}>
                    <label className="form-label">Login:</label>
                    <input className="form-control" type="text" value={login}
                           onChange={(e) => setLogin(e.target.value)}/>
                </div>
                <div className={"mb-3"}>
                    <label className="form-label">Heslo:</label>
                    <input className="form-control" type="password" value={heslo}
                           onChange={(e) => setHeslo(e.target.value)}/>
                </div>
                <div className={"mb-3"}>
                    <label className="form-label">Role:</label>
                    <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="" disabled>Vyberte roli</option>
                        <option key={"ROLE_ADMIN"} value={"ROLE_ADMIN"}>Admin</option>
                        <option key={"ROLE_UZIVATEL"} value={"ROLE_UZIVATEL"}>Uzivatel</option>
                    </select>
                </div>
            </form>
            <div className={"d-flex justify-content-around mt-4"}>
                <button className={"btn btn-primary"} type="button" onClick={() => handleAddEntity()}>
                    Přidat uživatele
                </button>
                <button className={"btn btn-danger"} onClick={() => onVytvor()}>
                    zpět
                </button>
            </div>
        </>
    );
};

export default VytvorUzivatel;
