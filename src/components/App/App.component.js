import React from "react";
import "./App.styles.css";

import { Header } from "../Header/Header.component";
import { Home } from "../Home/Home.component";
import { Services } from "../Services/Services.component";
import { Works } from "../Works/Works.component";
import { Team } from "../Team/Team.component";
import { Clients } from "../Clients/Clients.component";
import { Footer } from "../Footer/Footer.component";

export function App() {
  return (
    <div>
      {/* TODO: cuando sea mobile hacer burguer nav que se comporte asi https://tympanus.net/Development/OffCanvasMenuEffects/sideslide.html 
      recordar que en esta pagina tienen que aparecer de derecha a izquierda
      */}

      <Header />
      <Home />
      <Services />
      <Works />
      <Team />
      <Clients />
      <Footer />
    </div>
  );
}
