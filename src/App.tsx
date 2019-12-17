import React, { useContext } from 'react';
import { Link } from '@reach/router'
import { Store } from './store'

function App(props: any): JSX.Element {
  const {state} = useContext(Store)

  return (
    <div>
      <header className="header">
        <div className="">
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode</p>
        </div>
        <div className="">
          <Link to='/'>Home</Link>
          <Link to='/favs'>Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </div>
  )
}

export default App;
