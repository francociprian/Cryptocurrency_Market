import React from 'react'
import ToogleTheme from './ToogleTheme'

export default function NavBarInfo() {
  return (
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
