import React, { useState } from 'react';
import axios from 'axios';


const VytvorFilm = ({ onVytvor }) => {
    const [nazev, setNazev] = useState('');
    const [popis, setPopis] = useState('');

    const handleAddEntity = () => {
        if (!nazev || !popis) {
            alert('Vyplňte všechny údaje.');
            return;
        }

        const newEntity = {
            nazev,
            popis,
        };

        // Odeslání dat na API pomocí POST požadavku
        axios.post('http://localhost:8080/api/film', newEntity, {
            headers: {
                Authorization: `Bearer ` + localStorage.getItem("token")
            }
        })
            .then(response => {
                // Zpracování odpovědi z API
                console.log('Film byl úspěšně vytvořeno', response.data);
            })
            .catch(error => {
                // Zpracování chyby při odesílání na API
                console.error('Chyba při vytváření filmu', error);
            });

        // Vyčištění polí po přidání
        setNazev('');
        setPopis('');
        alert('Vytvořeno');
        onVytvor();
    };

    return (
        <>
            <form className={"mt-4"}>
                <div className={"mb-3"}>
                    <label className="form-label">Název:</label>
                    <input className="form-control" type="text" value={nazev}
                           onChange={(e) => setNazev(e.target.value)}/>
                </div>
                <div className={"mb-3"}>
                    <label className="form-label">Popis:</label>
                    <textarea className="form-control" rows={"10"} value={popis}
                           onChange={(e) => setPopis(e.target.value)}/>
                </div>
            </form>
            <div className={"d-flex justify-content-around mt-4"}>
                <button className={"btn btn-primary"} type="button" onClick={() => handleAddEntity()}>
                    Přidat film
                </button>
                <button className={"btn btn-danger"} onClick={() => onVytvor()}>
                    zpět
                </button>
            </div>
        </>
    );
};

export default VytvorFilm;
