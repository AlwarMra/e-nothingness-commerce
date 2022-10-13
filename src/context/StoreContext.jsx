import React, { createContext, useReducer } from 'react'
import {
  addToCart,
  substractFromCart,
  removeFromCart,
  calculateTotalQuantity,
  calculateTotalPrice,
} from './utils'
const Store = createContext()

const cartStorage = 'cartItems'
const userStorage = 'userInfo'

const ACTIONS = {
  SHOW_CART: 'show_cart',
  ADD_TO_CART: 'add_to_cart',
  SUBSTRACT_FROM_CART: 'substract_from_cart',
  REMOVE_FROM_CART: 'remove_from_cart',
  CLEAR_CART: 'clear_cart',
  SIGN_IN: 'sign_in',
  SIGN_OUT: 'sign_out',
}

const initialState = {
  user: JSON.parse(window.localStorage.getItem(userStorage)) || null,
  cart: {
    showModal: false,
    cartItems: JSON.parse(window.localStorage.getItem(cartStorage)) || [],
    totalQuantity: calculateTotalQuantity(
      JSON.parse(window.localStorage.getItem(cartStorage)) || 0,
    ),
    totalPrice: calculateTotalPrice(
      JSON.parse(window.localStorage.getItem(cartStorage)) || 0,
    ),
  },
}
function reducer(state, action) {
  switch (action.type) {
    // CART
    case ACTIONS.SHOW_CART:
      return {
        ...state,
        cart: { ...state.cart, showModal: !state.cart.showModal },
      }
    case ACTIONS.ADD_TO_CART: {
      const modal = !state.cart.showModal || true
      const item = { ...action.payload, q: 1 }
      const cartItems = addToCart(item, state.cart.cartItems)
      const q = calculateTotalQuantity(cartItems)
      const p = calculateTotalPrice(cartItems)
      window.localStorage.setItem(cartStorage, JSON.stringify(cartItems))
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems,
          showModal: modal,
          totalQuantity: q,
          totalPrice: p,
        },
      }
    }
    case ACTIONS.SUBSTRACT_FROM_CART: {
      const item = action.payload
      const cartItems = substractFromCart(item, state.cart.cartItems)
      const q = calculateTotalQuantity(cartItems)
      const p = calculateTotalPrice(cartItems)
      window.localStorage.setItem(cartStorage, JSON.stringify(cartItems))
      return {
        ...state,
        cart: { ...state.cart, cartItems, totalQuantity: q, totalPrice: p },
      }
    }
    case ACTIONS.REMOVE_FROM_CART: {
      const cartItems = removeFromCart(action.payload, state.cart.cartItems)
      const q = calculateTotalQuantity(cartItems)
      const p = calculateTotalPrice(cartItems)
      window.localStorage.setItem(cartStorage, JSON.stringify(cartItems))
      return {
        ...state,
        cart: { ...state.cart, cartItems, totalQuantity: q, totalPrice: p },
      }
    }
    case ACTIONS.CLEAR_CART: {
      window.localStorage.removeItem(cartStorage)
      return {
        ...state,
        cart: { ...state.cart, cartItems: [], totalPrice: 0, totalQuantity: 0 },
      }
    }

    // USER
    case ACTIONS.SIGN_IN: {
      window.localStorage.setItem(userStorage, JSON.stringify(action.payload))
      return { ...state, user: action.payload }
    }
    case ACTIONS.SIGN_OUT: {
      window.localStorage.removeItem(userStorage)
      return { ...state, user: null }
    }
    default:
      return state
  }
}

export function StoreContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    ACTIONS,
    dispatch,
    state,
  }
  return <Store.Provider value={value}>{children}</Store.Provider>
}

export default Store
