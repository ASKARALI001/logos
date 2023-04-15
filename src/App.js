import {Route, Routes} from "react-router-dom";
import Layout from "./Layiut/Layout";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import './style.scss'
import Login from "./pages/Login/Login";
import Sales from "./pages/Sales/Sales";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/sales'} element={<Sales/>}/>
        </Route>
          <Route path={'/register'} element={<Register/>}/>
          <Route path={'/login'} element={<Login/>}/>
      </Routes>


    </div>
  );
}

export default App;
