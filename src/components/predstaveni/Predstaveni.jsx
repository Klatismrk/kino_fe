import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListPredstaveni from "./ListPredstaveni";
import VytvorPredstaveni from "./VytvorPredstaveni";

export default function Predstaveni() {

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
                                    <h2 className={""}>Představení</h2>
                                    {zobrazeni === "list" && <ListPredstaveni onVytvor={() => zmenZobrazeni("list")} />}
                                    {zobrazeni === "list" && <button className={"btn btn-primary"} onClick={() => zmenZobrazeni("vytvoreni")}>
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