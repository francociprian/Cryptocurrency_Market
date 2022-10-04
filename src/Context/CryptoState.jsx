import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import CoinsReducer from './CoinsReducer';
import CryptoContext from './CryptoContext';
import { GET_COINS, GET_COIN } from './types';


export const CryptoState = ({ children }) => {
  const initialState = {
    coins: [],
    selectedCoin: null,
  };
    
  const [ state, dispatch ] = useReducer(CoinsReducer, initialState); 
    
  const getCoins = async () => {
    try {
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const data = res.data;
      dispatch({ 
          type: GET_COINS, 
          payload: data 
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getCoin = async (id) => {
    try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      dispatch({
          type: GET_COIN,
          payload: res.data
      })
    } catch(error) {
        console.log(error)
    }
  };

  return (
    <CryptoContext.Provider value={{
        coins: state.coins,
        selectedCoin: state.selectedCoin,
        getCoin,
        getCoins,
    }}>
        {children}
    </CryptoContext.Provider>
  );
}

export default CryptoState;