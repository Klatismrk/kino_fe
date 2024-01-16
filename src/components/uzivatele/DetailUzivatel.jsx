import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DetailUzivatel(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [entity, setEntity] = useState({});
    const prihlasen = props.prihlasen;

    useEffect(() => {
        axios.get(`http://localhost:8080/api/uzivatel/${id}`, {
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
    }, [id]);

    const deleteEntity = (entityId) => {
        axios.delete(`http://localhost:8080/api/uzivatel/${entityId}`, {
            headers: {
                Authorization: `Bearer ` + localStorage.getItem("token")
            }
        })
            .then(res => {
                navigate("/uzivatele");
            })
            .catch(error => {
                console.error('Chyba při mazání uživatele', error);
            });
    };

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"card"}>
                        <div className={"card-body text-center"}>
                            <h1>{entity.jmeno}</h1>
                            <p>Login: {entity.login}<br/>Heslo: {entity.heslo}</p>
                            <div className={"d-flex justify-content-around mt-4"}>
                                {prihlasen === "admin" && <button className="btn btn-danger" onClick={() => deleteEntity(entity.id)}>
                                    Smazat
                                </button>}
                                <button className="btn btn-danger" onClick={() => navigate("/uzivatele")}>
                                    Zpět
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailUzivatel;
