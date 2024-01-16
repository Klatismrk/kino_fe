import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListUzivatele from "./ListUzivatele";
import VytvorUzivatel from "./VytvorUzivatel";

export default function Uzivatele(props) {

    const [zobrazeni, setZobrazeni] = useState("list");
    const prihlasen = props.prihlasen;

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
                                {zobrazeni === "list" && <ListUzivatele prihlasen={prihlasen} />}
                                {zobrazeni === "list" && prihlasen === "admin" && <button className={"btn btn-primary"} onClick={() => zmenZobrazeni("vytvoreni")}>
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