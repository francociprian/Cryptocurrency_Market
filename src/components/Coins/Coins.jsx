import React,{ useContext, useState, useEffect } from 'react';
import Coin from './Coin';
import CryptoContext from '../../Context/CryptoContext';
import Loader from '../Loader';


function Coins() {
  const { coins, getCoins } = useContext(CryptoContext);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getCoins();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  },[]);

  // useEffect(() => {
  //   fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
  //   // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  //     .then((res) => res.json())
  //     .then((date) => setCoins(date))
  //     .catch((error) => console.log(error))
  // },[])


  return (
    <>
      <div className='max-w-xs mx-auto'>
        <form>   
            <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input 
                  type="search" 
                  onChange={(e) => setSearch(e.target.value)} 
                  placeholder="Search Crypto.." 
                  required
                  className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                />
            </div>
        </form>
      </div>
      {loading ? 
      (<div className='flex justify-center items-center h-[80vh] w-full'>
        <Loader />
      </div>)
        : 
      (
      <div className='max-w-5xl mx-auto'>
        <div className="grid grid-cols-1 border text-black dark:text-white my-10">
          <div className='grid grid-cols-3 py-4 px-4 border-b sticky top-0 bg-white dark:bg-black'>
            <p>Crypto</p>
            <p>Price</p>
            <p>Marketcap</p>
          </div>
          <div>
            <Coin 
              coins={coins} 
              search={search}
            />
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Coins