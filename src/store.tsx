import React, { createContext, useReducer } from 'react';

interface IState {
  episodes: Array<any>
  favourites: Array<any>
}

export interface IAction {
  type: string
  payload: any
}

const initialState: IState = {
  episodes: [],
  favourites: []
}

export const Store = createContext<IState | any>(initialState)

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case "FETCH_DATA": 
      return { ...state, episodes: action.payload}
    case "ADD_FAV":
      return { ...state, favourites: [ ...state.favourites, action.payload] }
    default:
      return state
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}  