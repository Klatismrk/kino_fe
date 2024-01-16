import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from "moment/moment";
import SedadlaGenerator from "./SalGenerator";

function DetailPredstaveni(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [entity, setEntity] = useState({});
    const prihlasen = props.prihlasen;
    const loggedIn = props.loggedIn;

    useEffect(() => {
        axios.get(`http://localhost:8080/api/predstaveni/${id}`, {
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
        axios.delete(`http://localhost:8080/api/predstaveni/${entityId}`, {
            headers: {
                Authorization: `Bearer ` + localStorage.getItem("token")
            }
        })
            .then(res => {
                navigate("/predstaveni");
            })
            .catch(error => {
                console.error('Chyba při mazání představení', error);
            });
    };

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"card"}>
                        <div className={"card-body text-center"}>
                            <h1>{entity.film?.nazev}</h1>
                            <h2>{moment(entity.datum).format('DD.MM.YYYY HH:mm')}</h2>
                            <p>{entity.film?.popis}</p>
                            {loggedIn && <SedadlaGenerator prihlasen={prihlasen} pocetRad={3} pocetSloupcu={6} predstaveniId={id}/>}
                            <div className={"d-flex justify-content-around mt-4"}>
                                {prihlasen === "admin" && <button className="btn btn-danger" onClick={() => deleteEntity(entity.id)}>
                                    Smazat
                                </button>}
                                <button className="btn btn-danger" onClick={() => navigate("/predstaveni")}>
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

export default DetailPredstaveni;
