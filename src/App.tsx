import Layout from "./components/Layout"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {

  return (
    //<Login/>
    <Router>
    <div>
        <Routes>
            <Route path="/"  element={<Layout children={<Home/>}/>} />
            <Route path="/produtos" element={<Products/>} />
            <Route path="/perfil" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
</Router>
  )
}

export default App
