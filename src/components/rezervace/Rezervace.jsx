import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListRezervace from "./ListRezervace";

export default function Rezervace() {

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
                                <h2 className={""}>Rezervace</h2>
                                {zobrazeni === "list" && <ListRezervace/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}