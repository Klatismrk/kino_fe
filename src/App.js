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

function App() {
  return (
      <Router>
        <Navbar/>
          <Routes>
              <Route path={"/"} element={<HomePage/>}/>
              <Route path={"/filmy"} element={<Filmy/>}/>
              <Route path={"/film/:id"} element={<DetailFilm/>}/>
              <Route path={"/predstaveni"} element={<Predstaveni/>}/>
              <Route path={"/predstaveni/:id"} element={<DetailPredstaveni/>}/>
              <Route path={"/uzivatele"} element={<Uzivatele/>}/>
              <Route path={"/uzivatel/:id"} element={<DetailUzivatel/>}/>
              <Route path={"/rezervace"} element={<Rezervace/>}/>
              <Route path={"/rezervace/:id"} element={<DetailRezervace/>}/>
          </Routes>
      </Router>
  );
}

export default App;
