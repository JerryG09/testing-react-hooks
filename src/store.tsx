import React, { createContext} from 'react';

const initialState = {}

export const Store = createContext(initialState)

function reducer() {

}

export function storeProvider(props: any) {
  return <Store.Provider>{props.children}</Store.Provider>
}