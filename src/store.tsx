import React, { createContext } from 'react';

const initialState = {}

export const Store = createContext(initialState)

function reducer() {

}

export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value='test'>{props.children}</Store.Provider>
}  