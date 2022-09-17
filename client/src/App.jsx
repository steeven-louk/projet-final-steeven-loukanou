import { Navbar } from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import { Index } from "./views/home";
import Liste from "./views/liste/Liste";
import ModifierProfile from "./views/profile/ModifierProfile";

import './App.css'


function App() {

  return (
    <div className="App">
        <Navbar />
 {/* search={searchInput} setSearch={setSearchInput} */}
 <div className="care">
          <div className="sideBar">
            <Sidebar />
          </div>

        <div className="pageContainer">
            <Routes>
              <Route path="/" exact element={ <Index /> }/>
              <Route path="/liste" element={ <Liste /> }/>
              <Route path="/profile" element={ <ModifierProfile/> }/>
            </Routes>
        </div>
    </div>
    </div>
  )
}

export default App
