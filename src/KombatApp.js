import {useTelegram} from "./components/hooks/useTelegram";
import {useEffect} from "react";
import HeaderKombat from "./components/LexanKombat/Header/HeaderKombat";


function KombatApp() {
    const {tg} = useTelegram()
    useEffect(() => {
        tg.ready()
    }, [])


    return (
        <div className="App">
           <HeaderKombat/>
        </div>
    );
}

export default KombatApp;