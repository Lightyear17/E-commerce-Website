import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shope from "./routes/shope/shope.component";
import CheckOut from "./components/check-out/check-out.component";


function App() {

  

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="shope/*" element={<Shope/>}/>
      <Route path="auth" element={<Authentication/>}/>
      <Route path="checkout" element={<CheckOut/>}/>
      </Route>
    
    </Routes>
  );
}

export default App;
