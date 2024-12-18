import {useTelegram} from "./components/hooks/useTelegram";
import {useEffect, useState} from "react";
import HeaderKombat from "./components/LexanKombat/Header/HeaderKombat";
import Main from "./components/LexanKombat/Main/Main";
import {LoadingContext} from "./components/context/LoadingContext";


function KombatApp() {
    const {tg} = useTelegram()
    const [value, setValue] = useState(0)
    const [currentEnergy, setCurrentEnergy] = useState(3000)
    tg.onEvent('activated', () => {
        const closeTime = Number(localStorage.getItem('closeTime')) || 0;
        const openTime = Date.now()
        const energyForAdd = ((openTime - closeTime) / 3000)
        if(energyForAdd + currentEnergy >= 3000) {
            localStorage.setItem('energy', '3000')
        } else{
            localStorage.setItem('energy', (energyForAdd + currentEnergy).toString())
        }
    })
    tg.onEvent('deactivated', () => {
        localStorage.setItem('closeTime', Date.now().toString())
    })
    useEffect(() => {
        tg.ready()
        setValue(parseInt(localStorage.getItem('value')) || 0)
        setCurrentEnergy(parseInt(localStorage.getItem('energy')) || currentEnergy)
    }, [])


    return (
        <LoadingContext.Provider value={{
            value,
            setValue,
            currentEnergy,
            setCurrentEnergy
        }}>
            <div className="App">
                <HeaderKombat/>
                <Main/>
            </div>
        </LoadingContext.Provider>

    );
}

export default KombatApp;