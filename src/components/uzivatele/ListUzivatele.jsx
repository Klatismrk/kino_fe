import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListUzivatele(props) {
    const [entity, setEntity] = useState([]);
    const prihlasen = props.prihlasen;

    useEffect(() => {
        axios.get('http://localhost:8080/api/uzivatel', {
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
        axios.delete(`http://localhost:8080/api/uzivatel/${entityId}`, {
            headers: {
                Authorization: `Bearer ` + localStorage.getItem("token")
            }
        })
            .then(res => {
                setEntity(prevState => prevState.filter(p => p.id !== entityId));
            })
            .catch(error => {
                console.error('Chyba při mazání uživatele', error);
            });
    };

    return (
        <div className="row">
            {entity.map(uzivatel => (
                <div className="col-md-4 mb-3" key={uzivatel.id}>
                    <div className="card">
                        <div className="card-body text-center">
                            <h4>
                                <Link to={`/uzivatel/${uzivatel.id}`}>
                                    {uzivatel.jmeno}
                                </Link>
                            </h4>
                            <p>Login: {uzivatel.login}<br/>Heslo: {uzivatel.heslo}</p>
                            {prihlasen === "admin" && <button className="btn btn-danger" onClick={() => deleteEntity(uzivatel.id)}>
                                Smazat
                            </button>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListUzivatele;
