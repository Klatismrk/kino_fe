import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListFilmy(props) {
    const [entity, setEntity] = useState([]);
    const prihlasen = props.prihlasen;

    useEffect(() => {
        axios.get('http://localhost:8080/api/film', {
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
        axios.delete(`http://localhost:8080/api/film/${entityId}`, {
            headers: {
                Authorization: `Bearer ` + localStorage.getItem("token")
            }
        })
            .then(res => {
                setEntity(prevState => prevState.filter(p => p.id !== entityId));
            })
            .catch(error => {
                console.error('Chyba při mazání filmu', error);
            });
    };

    return (
        <div className="row">
            {entity.map(film => (
                <div className="col-md-4 mb-3" key={film.id}>
                    <div className="card">
                        <div className="card-body text-center">
                            <h4>
                                <Link to={`/film/${film.id}`}>
                                    Film: {film.nazev}
                                </Link>
                            </h4>
                            <p>{film.popis}</p>
                            {prihlasen === "admin" && <button className="btn btn-danger" onClick={() => deleteEntity(film.id)}>
                                Smazat
                            </button>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListFilmy;
