import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from './Components/Authentication/SignUp';
import HomePage from './Components/property-listing/HomePage'
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
          
          <Route path="/register" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="*" element ={""}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
