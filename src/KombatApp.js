import {useTelegram} from "./components/hooks/useTelegram";
import {useEffect, useState} from "react";
import HeaderKombat from "./components/LexanKombat/Header/HeaderKombat";
import Main from "./components/LexanKombat/Main/Main";
import {LoadingContext} from "./components/context/LoadingContext";
import Footer from "./components/LexanKombat/Footer/Footer";


function KombatApp() {
    const {tg} = useTelegram()
    const [value, setValue] = useState(0)
    const [currentEnergy, setCurrentEnergy] = useState(3000)


    useEffect(() => {
        tg.ready()
        const closeTime = parseInt(localStorage.getItem('closeTime')) || Date.now();
        const openTime = Date.now()
        const lastCurrentEnergy = parseInt(localStorage.getItem('energy'))
        const energyForAdd = ((openTime - closeTime) / 3000)
        console.log(closeTime)
        console.log(openTime)
        console.log(energyForAdd)
        if (energyForAdd + lastCurrentEnergy >= 3000) {
            localStorage.setItem('energy', '3000')
        } else {
            localStorage.setItem('energy', (energyForAdd + lastCurrentEnergy).toString())
        }

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
                <Footer/>
            </div>
        </LoadingContext.Provider>

    );
}

export default KombatApp;