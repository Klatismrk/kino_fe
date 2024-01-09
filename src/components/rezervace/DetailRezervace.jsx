import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from "moment/moment";

function DetailRezervace() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [entity, setEntity] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/api/rezervace/${id}`)
            .then(res => {
                const entity = res.data;
                setEntity(entity);
            })
            .catch(error => {
                console.error('Chyba při načítání dat', error);
            });
    }, [id]);

    const deleteEntity = (entityId) => {
        axios.delete(`http://localhost:8080/api/rezervace/${entityId}`)
            .then(res => {
                navigate("/rezervace");
            })
            .catch(error => {
                console.error('Chyba při mazání rezervace', error);
            });
    };

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"card"}>
                        <div className={"card-body text-center"}>
                            <h1>Rezervace pro: {entity.uzivatel?.jmeno}</h1>
                            <p>Login: {entity.uzivatel?.login}<br/>
                                Představeni: {entity.predstaveni?.nazev}<br/>
                                Místo: {entity.misto}<br/>
                                Datum: {moment(entity.predstaveni?.datum).format('DD.MM.YYYY HH:mm')}
                            </p>
                            <div className={"d-flex justify-content-around mt-4"}>
                                <button className="btn btn-danger" onClick={() => deleteEntity(entity.id)}>
                                    Smazat
                                </button>
                                <button className="btn btn-danger" onClick={() => navigate("/rezervace")}>
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

export default DetailRezervace;
