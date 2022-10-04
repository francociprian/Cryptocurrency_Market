import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Coins from './components/Coins/Coins';
import NavBarInfo from './components/NavBarInfo';
import CoinDetail from './components/CoinDetail/CoinDetail';
import Watchlist  from './components/Watchlist/Watchlist';

import CryptoState from './Context/CryptoState';

function App() {
  return (
    <CryptoState>
      <BrowserRouter>
        <div className='text-black dark:text-white bg-slate-100 dark:bg-slate-700'>
          <NavBarInfo />
          <NavBar />
          <Routes>
            <Route path='/' element={<Coins />} /> 
            <Route path='/coin/:id' element={<CoinDetail />} />
            <Route exact path="/watchlist" element={<Watchlist />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CryptoState>
  )
}

export default App
