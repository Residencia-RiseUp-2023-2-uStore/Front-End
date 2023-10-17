import Topbar from "./Componentes/global/Topbar.jsx";
import Sidebar from "./Componentes/global/Sidebar.jsx"
import Dashboard from "./Componentes/dashboard/index.jsx"
// import Team from "./Componentes/team/index.jsx";
// import Products from "./Componentes/ProductCatalog/ProductCatalog.jsx";
// import Clients from "./Components/clients/clients.jsx";
// import SignUp from "./Componentes/EspacoCadastro/EspacoCadastro.jsx"; 
// import Login from "./Componentes/EspacoLogin/EspacoLogin.jsx";
// import Pie from "./scenes/pie/index.jsx";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/Geography";


function App() {
    const [isSidebar, setIsSidebar] = useState(true);
  
    return (
        <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/team" element={<Team />} /> */}
                {/* <Route path="/contacts" element={<Contacts />} /> */}
                {/* <Route path="/invoices" element={<Invoices />} /> */}
                {/* <Route path="/form" element={<Form />} /> */}
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/signUp" element={<SignUp />} /> */}
                {/* <Route path="/Login" element={<Login />} /> */}
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/faq" element={<FAQ />} /> */}
                {/* <Route path="/calendar" element={<Calendar />} /> */}
                {/* <Route path="/geography" element={<Geography />} /> */}
              </Routes>
            </main>
        </div>
    );
  }
  
  export default App;