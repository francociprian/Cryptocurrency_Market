import React from 'react';
import { useNavigate } from 'react-router-dom';

const Coin = ({ coins, search }) => {
  const navigate = useNavigate()

  const currencyPrice = function(number){
    return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
  }
  const currencyMarketCap = function(number){
    return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(number);
  }

  return (
    <>
      {coins.filter(coin => {
        if(search == ""){
            return coin
        } else if(coin.name.toLowerCase().includes(search.toLowerCase())){
            return coin
        }}).map((coin) => 
          <div className="border-b py-2 px-4 cursor-pointer" key={coin.id} onClick={() => navigate(`/coin/${coin.id}`)}>
            <div className='grid grid-cols-3'>
              <div className='flex gap-4'>
                <span className='w-[20px]'>{coin.market_cap_rank}</span>
                <div className='flex justify-center items-center gap-2'>
                  <img src={coin.image} alt={coin.name} className='h-9 w-9'/>
                  <p>{coin.name}</p>
                </div>
              </div>
              <p>{currencyPrice(coin.current_price)}</p>
              <p>{currencyMarketCap(coin.market_cap)}</p>
            </div>
          </div>
      )}

      {/* {coins.map((coin) => 
          <div 
            key={coin.id} 
            className="border-b py-2 px-4 cursor-pointer hover:bg-slate-100" 
            onClick={() => navigate(`/coin/${coin.id}`)}
            >
            <div className='grid grid-cols-3'>
              <div className='flex gap-4'>
                <span className='w-[20px]'>{coin.market_cap_rank}</span>
                <div className='flex justify-center items-center gap-2'>
                  <img src={coin.image} alt={coin.name} className='h-8 w-8'/>
                  <p>{coin.name}</p>
                </div>
              </div>
              <p>{currencyPrice(coin.current_price)}</p>
              <p>{currencyMarketCap(coin.market_cap)}</p>
            </div>
          </div>
      )} */}
    </>     
  )
}

export default Coin;