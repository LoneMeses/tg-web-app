import {useTelegram} from "./components/hooks/useTelegram";
import {useEffect} from "react";
import HeaderKombat from "./components/LexanKombat/Header/HeaderKombat";
import Main from "./components/LexanKombat/Main/Main";


function KombatApp() {
    const {tg} = useTelegram()
    useEffect(() => {
        tg.ready()
    }, [])


    return (
        <div className="App">
            <HeaderKombat/>
            <Main/>
        </div>
    );
}

export default KombatApp;