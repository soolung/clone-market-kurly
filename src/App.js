import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import {createContext, useMemo, useState} from "react";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import ScrollToTop from "./utils/ScrollToTop";
import Order from "./pages/Order/Order";
import "./styles/util.scss";
import NewProduct from "./pages/NewProduct/NewProduct";
import Best from "./pages/Best/Best";
import Thrifty from "./pages/ThriftyShopping/ThriftyShopping";
export const UserContext = createContext({"user": null});
export const CartContext = createContext([]);

function App() {

    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);
    const cartValue = useMemo(() => ({cart, setCart}), [cart]);
    const userValue = useMemo(() => ({user, setUser}), [user]);

    return (
        <>
            <UserContext.Provider value={userValue}>
                <CartContext.Provider value={cartValue}>
                    <BrowserRouter>
                        <Header/>
                        <ScrollToTop>
                            <Routes>
                                <Route path="/" element={<Main/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/product/:id" element={<ProductDetail/>}/>
                                <Route path="/cart" element={<Cart/>}/>
                                <Route path="/order" element={<Order/>}/>
                                <Route path="/newproduct" element={<NewProduct/>}/>
                                <Route path="/best" element={<Best/>}/>
                                <Route path="/thrifty" element={<Thrifty/>}/>
                            </Routes>
                        </ScrollToTop>
                        <Footer/>
                    </BrowserRouter>
                </CartContext.Provider>
            </UserContext.Provider>
        </>
    );
}

export default App;
