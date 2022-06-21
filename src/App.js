import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./pages/Main/Main";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
