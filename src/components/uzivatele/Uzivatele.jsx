import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListUzivatele from "./ListUzivatele";
import VytvorUzivatel from "./VytvorUzivatel";

export default function Uzivatele() {

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
                                <h2 className={""}>Uživatelé</h2>
                                {zobrazeni === "list" && <ListUzivatele onVytvor={() => zmenZobrazeni("list")} />}
                                {zobrazeni === "list" && <button className={"btn btn-primary"} onClick={() => zmenZobrazeni("vytvoreni")}>
                                    Nový
                                </button>}
                                {zobrazeni === "vytvoreni" && (<VytvorUzivatel onVytvor={() => zmenZobrazeni("list")} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}