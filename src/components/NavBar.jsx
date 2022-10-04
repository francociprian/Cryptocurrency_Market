import React from 'react';
import { Link } from 'react-router-dom';
import ToogleTheme from './ToogleTheme'

const InfoCrypto = () => {
  return(
    <div className='border-b'>
        <div className='max-w-7xl mx-auto flex justify-between items-center h-9'>
            <div className='flex gap-3'>
                <p className='text-xs'>Coins: <span className='text-blue-500'>13178</span></p>
                <p className='text-xs'>Exchanges: <span className='text-blue-500'>590</span></p>
                <p className='text-xs'>Market Cap: <span className='text-blue-500'>$966,793,484,924</span></p>
                <p className='text-xs'>24h Vol: <span className='text-blue-500'>$47,320,038,760</span></p>
                <p className='text-xs'>Dominance: <span className='text-blue-500'>BTC 38.1% ETH 16.2%</span></p>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <select className='bg-transparent'>
                    <option value='en'>EN</option>
                    <option value='es'>ES</option>
                    <option value='fr'>FR</option>
                    <option value='de'>DE</option>
                    <option value='it'>IT</option>
                    <option value='pt'>PT</option>
                    <option value='ru'>RU</option>
                    <option value='zh'>ZH</option>
                </select>
                <select className='bg-transparent'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="CNY">CNY</option>
                    <option value="RUB">RUB</option>
                </select>
                <ToogleTheme />
            </div>
        </div>
    </div>
    )
}

const NavCrypto = () => {
  return(
    <div className='bg-slate-50 dark:bg-zinc-800 border-b mb-6'>
      <div className='max-w-7xl mx-auto flex justify-between items-center h-16'>
        <Link to='/'><h1 className="text-xl font-bold underline">Cryptocurrency Market</h1></Link>
        <div className='flex gap-4 items-center'>
          <Link to='/watchlist' className='text-xs ml-0 mr-5 font-normal'>WATCHLIST</Link>
          {/* <form>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input 
              type="search" 
              // onChange={(e) => setSearch(e.target.value)} 
              placeholder="Search Crypto.." 
              required
              className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              />
            </div>
          </form> */}
        </div>
      </div>
    </div>
    )
}

export default function NavBar() {
  return (
    <>
      <InfoCrypto />
      <NavCrypto />
    </>
  )
}
