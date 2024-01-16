import React, { useState, useEffect } from 'react';
import axios from 'axios';


const VytvorPredstaveni = ({ onVytvor }) => {
    const [nazev, setNazev] = useState('');
    const [datum, setDatum] = useState('');
    const [film, setFilm] = useState('');
    const [filmy, setFilmy] = useState([]);

    // Načtení filmů z API při načtení komponenty
    useEffect(() => {
        axios.get('http://localhost:8080/api/film', {
            headers: {
                Authorization: `Bearer ` + localStorage.getItem("token")
            }
        })
            .then(response => setFilmy(response.data))
            .catch(error => console.error('Chyba při načítání filmů', error));
    }, []); // [] zajišťuje, že se načtou filmy pouze při prvním načtení komponenty

    const handleAddEntity = () => {
        if (!nazev || !datum || !film) {
            alert('Vyplňte všechny údaje.');
            return;
        }
        // Validace dat nebo další logika může být přidána zde

        // Vytvoření objektu s novým představením
        const newEntity = {
            nazev,
            datum,
            film: {
                id: film,  // Přidejte skutečnou hodnotu nebo proměnnou pro ID vybraného filmu
            },
        };

        // Výpis požadavku do konzole
        console.log('Odesílaný požadavek:', newEntity);

        // Odeslání dat na API pomocí POST požadavku
        axios.post('http://localhost:8080/api/predstaveni', newEntity, {
            headers: {
                Authorization: `Bearer ` + localStorage.getItem("token")
            }
        })
            .then(response => {
                // Zpracování odpovědi z API
                console.log('Představení bylo úspěšně vytvořeno', response.data);
            })
            .catch(error => {
                // Zpracování chyby při odesílání na API
                console.error('Chyba při vytváření představení', error);
            });

        // Vyčištění polí po přidání
        setNazev('');
        setDatum('');
        setFilm('');
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
                    <label className="form-label">Datum:</label>
                    <input className="form-control" type="datetime-local" value={datum}
                           onChange={(e) => setDatum(e.target.value)}/>
                </div>
                <div className={"mb-3"}>
                    <label className="form-label">Film:</label>
                    <select className="form-select" value={film} onChange={(e) => setFilm(e.target.value)}>
                        <option value="" disabled>Vyberte film</option>
                        {filmy.map(f => (
                            <option key={f.id} value={f.id}>{f.nazev}</option>
                        ))}
                    </select>
                </div>
            </form>
            <div className={"d-flex justify-content-around mt-4"}>
                <button className={"btn btn-primary"} type="button" onClick={() => handleAddEntity()}>
                    Přidat představení
                </button>
                <button className={"btn btn-danger"} onClick={() => onVytvor()}>
                    zpět
                </button>
            </div>
        </>
    );
};

export default VytvorPredstaveni;
