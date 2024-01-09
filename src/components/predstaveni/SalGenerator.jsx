import React, {useEffect, useState} from 'react';
import axios from "axios";

function SedadlaGenerator({ pocetRad, pocetSloupcu, predstaveniId }) {
    const [vybraneSedadlo, setVybraneSedadlo] = useState("");
    const [uzivatele, setUzivatele] = useState([]);
    const [uzivatel, setUzivatel] = useState("");
    const [misto, setMisto] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8080/api/uzivatel')
            .then(response => setUzivatele(response.data))
            .catch(error => console.error('Chyba při načítání uživatelů', error));
    }, []);

    const handleAddEntity = () => {
        if (!misto || !uzivatel || !predstaveniId) {
            alert('Vyplňte všechny údaje.');
            return;
        }

        const newEntity = {
            uzivatel: {
                id: uzivatel,
            },
            predstaveni: {
                id: predstaveniId,
            },
            misto: misto,
        };

        console.log('Odesílaný požadavek:', newEntity);

        axios.post('http://localhost:8080/api/rezervace', newEntity)
            .then(response => {
                console.log('Rezervace byla úspěšně vytvořena', response.data);
            })
            .catch(error => {
                console.error('Chyba při vytváření rezervace', error);
            });

        setMisto("")
        setUzivatel('');
        alert('Vytvořeno');
    };

    const handleVyberSedadla = (radek, sedadlo) => {
        setVybraneSedadlo({ radek, sedadlo });
    };

    const sedadla = [];

    let cislo = 0;

    for (let i = 1; i <= pocetRad; i++) {
        for (let j = 1; j <= pocetSloupcu; j++) {
            cislo++;
            sedadla.push(
                    <div className={"col-2"}>
                        <div className={"card"}>
                            <div className={"card-body"}>
                                <label key={`${i}-${j}`} className="sedadlo-label form-check form-check-inline">
                                    <input
                                        value={cislo}
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={vybraneSedadlo?.radek === i && vybraneSedadlo?.sedadlo === j}
                                        onChange={(e) => {
                                            handleVyberSedadla(i, j);
                                            setMisto(e.target.value);
                                        }}
                                    />
                                    <span className="form-check-label">
                        Řada {i}<br/>Slouopec {j}<br/>Sedadlo {cislo}
                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
            );
        }
    }

    return (
        <div className="sedadla-container">
            <form>
                <div className={"row g-md-2"}>
                    {sedadla}
                </div>
                <div className={"mb-3"}>
                    <label className="form-label">Uživatelé:</label>
                    <select className="form-select" value={uzivatel} onChange={(e) => setUzivatel(e.target.value)}>
                        <option value="" disabled>Vyberte uživatele</option>
                        {uzivatele.map(f => (
                            <option key={f.id} value={f.id}>{f.jmeno}</option>
                        ))}
                    </select>
                    <button className={"btn btn-primary"} type="button" onClick={() => handleAddEntity()}>
                        Vytvořit rezervaci
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SedadlaGenerator;