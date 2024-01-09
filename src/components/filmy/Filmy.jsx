import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListFilmy from "./ListFilmy";
import VytvorFilm from "./VytvorFilm";

export default function Filmy() {

    const [zobrazeni, setZobrazeni] = useState("list");

    const zmenZobrazeni = (hodnota) => {
        setZobrazeni(hodnota);
    };

    return (
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"card"}>
                            <div className={"card-body text-center"}>
                                <h2 className={""}>Filmy</h2>
                                {zobrazeni === "list" && <ListFilmy onVytvor={() => zmenZobrazeni("list")} />}
                                {zobrazeni === "list" && <button className={"btn btn-primary"} onClick={() => zmenZobrazeni("vytvoreni")}>
                                    Nové
                                </button>}
                                {zobrazeni === "vytvoreni" && (<VytvorFilm onVytvor={() => zmenZobrazeni("list")} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}