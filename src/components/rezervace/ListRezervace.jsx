import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from "moment";

function ListRezervace() {
    const [entity, setEntity] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/rezervace')
            .then(res => {
                const entity = res.data;
                setEntity(entity);
            })
            .catch(error => {
                console.error('Chyba při načítání dat', error);
            });
    }, []);

    const deleteEntity = (entityId) => {
        axios.delete(`http://localhost:8080/api/rezervace/${entityId}`)
            .then(res => {
                setEntity(prevState => prevState.filter(p => p.id !== entityId));
            })
            .catch(error => {
                console.error('Chyba při mazání entity', error);
            });
    };

    return (
        <div className="row">
            {entity.map(rezervace => (
                <div className="col-md-4 mb-3" key={rezervace.id}>
                    <div className="card">
                        <div className="card-body text-center">
                            <h4>
                                <Link to={`/rezervace/${rezervace.id}`}>
                                    {rezervace.predstaveni?.film?.nazev}<br/>Uživatel: {rezervace.uzivatel?.login}
                                </Link>
                            </h4>
                            <p>Jméno: {rezervace.uzivatel?.jmeno}<br/>
                                Datum: {moment(rezervace.predstaveni?.datum).format('DD.MM.YYYY HH:mm')}<br/>
                                Místo: {rezervace.misto}
                            </p>
                            <button className="btn btn-danger" onClick={() => deleteEntity(rezervace.id)}>
                                Smazat
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListRezervace;
