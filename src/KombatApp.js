import {useTelegram} from "./components/hooks/useTelegram";
import {useEffect, useState} from "react";
import HeaderKombat from "./components/LexanKombat/Header/HeaderKombat";
import Main from "./components/LexanKombat/Main/Main";
import {LoadingContext} from "./components/context/LoadingContext";
import LoadingPage from "./components/LexanKombat/Pages/LoadingPage";


function KombatApp() {
    const {tg} = useTelegram()
    useEffect(() => {
        tg.ready()
    }, [])


    const [isLoading, setIsLoading] = useState(true);
    return (
        <LoadingContext.Provider value={{
            isLoading,
            setIsLoading
        }}>
            <div className="App">
                <HeaderKombat/>
                <Main/>
                <LoadingPage/>
            </div>
        </LoadingContext.Provider>

    );
}

export default KombatApp;