import {useTelegram} from "./components/hooks/useTelegram";
import {useEffect, useState} from "react";
import HeaderKombat from "./components/LexanKombat/Header/HeaderKombat";
import Main from "./components/LexanKombat/Main/Main";
import {LoadingContext} from "./components/context/LoadingContext";
import Footer from "./components/LexanKombat/Footer/Footer";


function KombatApp() {
    const {tg, cloudStorage} = useTelegram()
    const [value, setValue] = useState(0)
    const [currentEnergy, setCurrentEnergy] = useState(2999)


    useEffect(() => {
        tg.ready()
        tg.expand()
        const closeTime = parseInt(tg.CloudStorage.getItem('closeTime')) || Date.now();
        const openTime = Date.now()
        const lastCurrentEnergy = parseInt(tg.CloudStorage.getItem('energy'))
        const energyForAdd = ((openTime - closeTime) / 3000)
        console.log(closeTime)
        console.log(openTime)
        console.log(energyForAdd)
        if (energyForAdd + lastCurrentEnergy >= 3000) {
            tg.CloudStorage.setItem('energy', '3000')
        } else {
            tg.CloudStorage.setItem('energy', (energyForAdd + lastCurrentEnergy).toString())
        }

        setValue(parseInt(tg.CloudStorage.getItem('value')) || 0)
        setCurrentEnergy(parseInt(tg.CloudStorage.getItem('energy')) || currentEnergy)
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