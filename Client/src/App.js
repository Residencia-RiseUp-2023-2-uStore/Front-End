import Topbar from "./Componentes/global/Topbar.jsx";
import Sidebar from "./Componentes/global/Sidebar.jsx"
import Dashboard from "./Componentes/dashboard/index.jsx"
// import Team from "./Componentes/team/index.jsx";
// import Products from "./Componentes/ProductCatalog/ProductCatalog.jsx";
// import Clients from "./Components/clients/clients.jsx";
import ntes/EspacoCadastro/EspacoCadastro.jsx";Login from "./Componentes/EspacoLogin/EspacoLogin.jsx";
import SignUp from "./Compone
// import Pie from "./scenes/pie/index.jsx";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/Geography";


function App(){
    return(
        <div className="app">
            <main className="content">
                <Topbar/>
                <Sidebar/>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    {/* <Route path="/team" element={<Team/>}/> */}
                    {/* <Route path="/products" element={<Products/>}/> */}
                    {/* <Route path="/clients" element={<Clients/>}/> */}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    {/* <Route path="/pie" element={<Pie/>}/> */}
                    {/* <Route path="/faq" element={<FAQ/>}/> */}
                    {/* <Route path="/geography" element={<Geography/>}/> */}
                    
                </Routes>
            </main>
        </div>
    )
}

export default App;