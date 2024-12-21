import {useTelegram} from "./components/hooks/useTelegram";
import {useEffect, useState} from "react";
import HeaderKombat from "./components/LexanKombat/Header/HeaderKombat";
import Game from "./components/LexanKombat/Game/Game";
import {LoadingContext} from "./components/context/LoadingContext";
import Footer from "./components/LexanKombat/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import FormKombat from "./components/LexanKombat/Form/FormKombat";
import './App.css'
function KombatApp() {
    const {tg} = useTelegram()
    const [score, setScore] = useState(0)
    const [currentEnergy, setCurrentEnergy] = useState(2999)


    useEffect(() => {
        tg.ready()
        tg.expand()
        const closeTime = parseInt(localStorage.getItem('closeTime')) || Date.now();
        const openTime = Date.now()
        const lastCurrentEnergy = parseInt(localStorage.getItem('energy'))
        const energyForAdd = ((openTime - closeTime) / 3000)
        if (energyForAdd + lastCurrentEnergy >= 3000) {
            localStorage.setItem('energy', '3000')
        } else {
            localStorage.setItem('energy', (energyForAdd + lastCurrentEnergy).toString())
        }

        setScore(parseInt(localStorage.getItem('value')) || 0)
        setCurrentEnergy(parseInt(localStorage.getItem('energy')) || currentEnergy)
    }, [])


    return (
        <LoadingContext.Provider value={{
            score,
            setScore,
            currentEnergy,
            setCurrentEnergy
        }}>
            <div className="App">
                <HeaderKombat/>
                <Routes>
                    <Route index element={<Game/>}/>
                    <Route path={'/form'} element={<FormKombat/>}/>
                </Routes>
                <Footer/>
            </div>
        </LoadingContext.Provider>

    );
}

export default KombatApp;