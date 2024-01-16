import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListRezervace from "./ListRezervace";

export default function Rezervace(props) {
    const prihlasen = props.prihlasen;

    return (
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"card"}>
                            <div className={"card-body text-center"}>
                                <h2 className={""}>Rezervace</h2>
                                <ListRezervace prihlasen={prihlasen} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}