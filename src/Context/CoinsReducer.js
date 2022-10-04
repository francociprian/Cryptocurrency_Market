import { GET_COINS, GET_COIN } from './types'

export default function CoinsReducer(state, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_COINS:
            return {
                ...state,
                coins: payload,
        };
        case GET_COIN:
            return {
                ...state,
                selectedCoin: payload,
            };
        default:
            return state;
    }
}