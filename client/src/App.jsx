import { Navbar } from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import { Index } from "./views/home";
import Liste from "./views/liste/Liste";
import ModifierProfile from "./views/profile/ModifierProfile";
import AjouterCollab from "./views/profile/AjouterCollab";

import { withAuth } from "./services/service";


import './App.css'
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Connexion } from "./views/auth/Connexion";


function App() {

  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="App">
        <Navbar  search={searchInput} setSearch={setSearchInput}/>

 <div className="care">
          <div className="sideBar">
            <Sidebar />
          </div>

        <div className="pageContainer">
            <Routes>
              <Route path="/home" exact element={ <Index /> }/>
              <Route path="/liste" element={ <Liste  search={searchInput} setSearch={setSearchInput} /> }/>
              <Route path="/editer" element={ <ModifierProfile/> }/>
              <Route path="/ajouter" element={ <AjouterCollab/> }/>
            </Routes>
        </div>
    </div>
    </div>
  )
}

export default withAuth(App); 
