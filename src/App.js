import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import {createContext, useMemo, useState} from "react";
import Cart from "./pages/Cart/Cart";

export const UserContext = createContext({"user": null});
export const CartContext = createContext([]);

function App() {

    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);
    const cartValue = useMemo(() => ({ cart, setCart }), [cart]);
    const userValue = useMemo(() => ({ user, setUser }), [user]);


    return (
        <>
            <UserContext.Provider value={userValue}>
                <CartContext.Provider value={cartValue}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
                </CartContext.Provider>
            </UserContext.Provider>
        </>
    );
}

export default App;
