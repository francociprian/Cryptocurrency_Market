import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='bg-white dark:bg-black border-b mb-6'>
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
