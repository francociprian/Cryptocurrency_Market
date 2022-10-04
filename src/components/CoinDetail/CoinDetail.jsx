import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CryptoContext from '../../Context/CryptoContext';
import Loader from '../Loader';


export default function CoinDetail() {
  const { getCoin, selectedCoin } = useContext(CryptoContext);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  useEffect(() => {
    getCoin(id);
    setTimeout(() => {
      setLoading(false)
    } , 1500)
  }, [id])


  return (
    <>
      {loading ? 
      (<div className='max-w-5xl mx-auto flex justify-center items-center h-[80vh] w-full'>
          <Loader />
        </div>)
        :
      (<div className='max-w-5xl mx-auto'>
          <div className='text-xs block'>
            <Link to='/' className='hover:underline hover:underline-offset-2'>Cryptocurrencies</Link>
            <span className='px-2'>{'>'}</span>
            <Link to='/' className='hover:underline hover:underline-offset-2'>Coins</Link>
            <span className='px-2'>{'>'}</span>
            <span>{selectedCoin.name}</span>
          </div>
          <div className='h-full bg-slate-50'>
            <div key={selectedCoin.id} className='flex justify-around gap-10 my-4 bg-slate-200'>
              <div>
                <div className='flex justify-center items-center'>
                  <img src={selectedCoin.image.large} alt={selectedCoin.name} className=' h-10 w-10'/>
                  <p className='text-5xl flex items-center'>
                    {selectedCoin.name}
                    <span className='ml-2 text-xs border-[1px] p-1 bg-slate-200 rounded-md uppercase'>{selectedCoin.symbol}</span>  
                  </p> 
                </div>
                <p className='text-xs'>Rank: #{selectedCoin.coingecko_rank}</p>
              </div>
              <div>
                <p className='text-xs'>{selectedCoin.name} Price <span className='uppercase'>({selectedCoin.symbol})</span></p>
                <p className='text-5xl font-bold'>${selectedCoin.market_data.current_price.usd}</p>
              </div>
              <div className='flex flex-col'>
              <span className='text-xs'>24 Hours: {selectedCoin.market_data.price_change_percentage_24h}</span>
              <span className='text-xs'>7 Days: {selectedCoin.market_data.price_change_percentage_7d}</span>
              <span className='text-xs'>30 Days: {selectedCoin.market_data.price_change_percentage_30d}</span>
              <span className='text-xs'>1 Year: {selectedCoin.market_data.price_change_percentage_1y}</span>
              </div>
            </div>    
          </div>
        </div>)}
    </>
  )
}
