import {useTelegram} from "./components/hooks/useTelegram";
import {useEffect} from "react";
import Header from "./components/LexanKombat/Header/Header";


function KombatApp() {
    const {tg} = useTelegram()
    useEffect(() => {
        tg.ready()
    }, [])


    return (
        <div className="App">
           <Header/>
        </div>
    );
}

export default KombatApp;