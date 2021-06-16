import React, {useEffect} from 'react'
import './app.css'
import Home from './pages/Home'
import Services from './pages/Services'


import Aos from 'aos';
import 'aos/dist/aos.css'

import Globalfont from './fonts/fonts';

import {
    Route,
    BrowserRouter as Router,
    Switch
} 
from 'react-router-dom'



function App() {
    useEffect(()=>{
        Aos.init();
      },[])

    return (
        <>
            <Router>
                <Globalfont />
                <Switch>
                    <Route path = '/' exact component = {Home} />
                    <Route path = '/services' component = {Services} />
                </Switch>
            </Router>
        </>
    )
}

export default App;
