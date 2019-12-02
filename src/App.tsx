import React, { useContext } from 'react'
import {Store} from './store'

function App(): JSX.Element {
  const store = useContext(Store)
  return (
    <div>
      {console.log(store)}
      <h1>Holy Mother</h1>
      <p>Pick your favourite episode</p>
    </div>
  )
}

export default App;
