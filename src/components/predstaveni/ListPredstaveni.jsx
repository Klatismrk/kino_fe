import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

function ListPredstaveni(props) {
    const [entity, setEntity] = useState([]);
    const prihlasen = props.prihlasen;

    useEffect(() => {
        axios.get('http://localhost:8080/api/predstaveni', {
            headers: {
                Authorization: `Bearer ` + localStorage.getItem("token")
            }
        })
            .then(res => {
                const entity = res.data;
                setEntity(entity);
            })
            .catch(error => {
                console.error('Chyba při načítání dat', error);
            });
    }, []);

    const deleteEntity = (entityId) => {
        axios.delete(`http://localhost:8080/api/predstaveni/${entityId}`, {
            headers: {
                Authorization: `Bearer ` + localStorage.getItem("token")
            }
        })
            .then(res => {
                setEntity(prevState => prevState.filter(p => p.id !== entityId));
            })
            .catch(error => {
                console.error('Chyba při mazání představení', error);
            });
    };

    return (
        <div className="row">
            {entity.map(predstaveni => (
                <div className="col-md-4 mb-3" key={predstaveni.id}>
                    <div className="card">
                        <div className="card-body text-center">
                            <h4>
                                <Link to={`/predstaveni/${predstaveni.id}`}>
                                    {predstaveni.nazev}<br />
                                    Film: {predstaveni.film.nazev}<br />
                                    Promítání: {moment(predstaveni.datum).format('DD.MM.YYYY HH:mm')}
                                </Link>
                            </h4>
                            <p>{predstaveni.film.popis}</p>
                            {prihlasen === "admin" && <button className="btn btn-danger" onClick={() => deleteEntity(predstaveni.id)}>
                                Smazat
                            </button>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListPredstaveni;
