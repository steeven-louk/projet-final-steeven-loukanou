import { Navbar } from "./components/navbar/Navbar";


import './App.css'


function App() {

  return (
    <div className="App">
        <Navbar />

        <div className="pageContainer">
            <Routes>
              <Route path="/" exact element={ <Index /> }/>
              {/* <Route path="/liste" element={ <Liste search={searchInput} setSearch={setSearchInput}/> }/>
              <Route path="/profile" element={ <ModifierProfile/> }/> */}
            </Routes>
        </div>
    </div>
  )
}

export default App
