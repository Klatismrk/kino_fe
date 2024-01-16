import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListPredstaveni from "./ListPredstaveni";
import VytvorPredstaveni from "./VytvorPredstaveni";

export default function Predstaveni(props) {

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
                                    <h2 className={""}>Představení</h2>
                                    {zobrazeni === "list" && <ListPredstaveni prihlasen={prihlasen} />}
                                    {zobrazeni === "list" && prihlasen === "admin" && <button className={"btn btn-primary"} onClick={() => zmenZobrazeni("vytvoreni")}>
                                        Nové
                                    </button>}
                                    {zobrazeni === "vytvoreni" && (<VytvorPredstaveni onVytvor={() => zmenZobrazeni("list")} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

}