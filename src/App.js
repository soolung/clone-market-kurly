import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
