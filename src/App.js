import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import {createContext, useMemo, useState} from "react";

export const UserContext = createContext({"user": null});

function App() {

    const [user, setUser] = useState({});
    const value = useMemo(() => ({ user, setUser}), [user]);


    return (
        <>
            <UserContext.Provider value={value}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}

export default App;
