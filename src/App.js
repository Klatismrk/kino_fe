import './App.css';
import Navbar from "./components/Navbar";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Predstaveni from "./components/predstaveni/Predstaveni";
import DetailPredstaveni from "./components/predstaveni/DetailPredstaveni";
import Filmy from "./components/filmy/Filmy";
import DetailFilm from "./components/filmy/DetailFilm";
import Uzivatele from "./components/uzivatele/Uzivatele";
import DetailUzivatel from "./components/uzivatele/DetailUzivatel";
import HomePage from "./components/HomePage";
import Rezervace from "./components/rezervace/Rezervace";
import DetailRezervace from "./components/rezervace/DetailRezervace";
import Prihlaseni from "./components/prihlaseni/Prihlaseni";
import {useEffect, useState} from "react";
import { jwtDecode as jwt_decode } from 'jwt-decode';
import Registrace from "./components/registrace/Registrace";

function App() {
    const [loggedIn, setLogedIn] = useState(false);
    const [prihlasen, setPrihlasen] = useState("odhlasen");
    const [prihlasenId, setPrihlasenId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwt_decode(token);
            const userRole = decodedToken.roles;
            setPrihlasenId(decodedToken.id);
            if (userRole[0] === "ROLE_UZIVATEL") {
                setPrihlasen("uzivatel");
                console.log(prihlasen + " v uzivateli");
            } else if (userRole[0] === "ROLE_ADMIN") {
                setPrihlasen("admin");
                console.log(prihlasen + " v adminovi");
            }
            console.log(userRole);
        } else {
            setPrihlasen("odhlasen")
            console.log(prihlasen + " v odhlasen")
        }
    }, [loggedIn]);

    return (
      <Router>
        <Navbar prihlasen={prihlasen} prihlasenId={prihlasenId} loggedIn={loggedIn} logOff={() => setLogedIn(false)}/>
          <Routes>
              <Route path={"/"} element={<HomePage/>}/>
              <Route path={"/filmy"} element={<Filmy prihlasen={prihlasen}/>}/>
              <Route path={"/film/:id"} element={<DetailFilm prihlasen={prihlasen}/>}/>
              <Route path={"/predstaveni"} element={<Predstaveni prihlasen={prihlasen}/>}/>
              <Route path={"/predstaveni/:id"} element={<DetailPredstaveni prihlasen={prihlasen} loggedIn={loggedIn}/>}/>
              <Route path={"/uzivatele"} element={<Uzivatele prihlasen={prihlasen}/>}/>
              <Route path={"/uzivatel/:id"} element={<DetailUzivatel prihlasen={prihlasen}/>}/>
              <Route path={"/rezervace"} element={<Rezervace prihlasen={prihlasen}/>}/>
              <Route path={"/rezervace/:id"} element={<DetailRezervace prihlasen={prihlasen}/>}/>
              <Route path={"/prihlaseni"} element={<Prihlaseni logIn={() => setLogedIn(true)}/>}/>
              <Route path={"/registrace"} element={<Registrace/>}/>
          </Routes>
      </Router>
  );
}

export default App;
