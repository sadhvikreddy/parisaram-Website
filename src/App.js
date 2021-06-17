import React, {useEffect} from 'react'
import './app.css'
import Home from './pages/Home'


import Aos from 'aos';
import 'aos/dist/aos.css'

import Globalfont from './fonts/fonts';




function App() {
    useEffect(()=>{
        Aos.init();
      },[])

    return (
        <>
                <Globalfont />
                    <Home />
        </>
    )
}

export default App;
