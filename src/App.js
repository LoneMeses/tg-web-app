import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

function App() {
    const {tg, onToggleButton} = useTelegram()
    useEffect(() => {
        tg.ready()
    }, [])


    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route index={true} element={<ProductList/>}/>
                    <Route path={'form'} element={<Form/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    )
        ;
}

export default App;
