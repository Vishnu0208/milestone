import { BrowserRouter, Routes , Route } from "react-router-dom";
import Login from "./components/login_form";
import Register from "./components/registration_form";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/Login" element={<Register/>}/>
              <Route path="/Login" element={<Login/>}/>
          </Routes>      
      </BrowserRouter>
    </>
  );
}

export default App;
