import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Coins from './components/Coins/Coins';
import CoinDetail from './components/CoinDetail/CoinDetail';
import Watchlist  from './components/Watchlist/Watchlist';

import CryptoState from './Context/CryptoState';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js'

function App() {
  
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Filler
    )

  return (
    <CryptoState>
      <BrowserRouter>
        <div className='text-black dark:text-white dark:bg-[#17171a] bg-[#FAFAFA] min-h-screen'>
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
