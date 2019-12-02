import React, { useContext, useEffect } from 'react'
import {Store} from './store'

function App(): JSX.Element {
  const {state, dispatch} = useContext(Store)

  useEffect(() => {
    state.episodes.length === 0 && fetchData()
    // return () => {
    //   cleanup
    // };
  }, [])

  const fetchData = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    })
  }
  return (
    <div>
      {console.log(state.episodes)}
      <h1>Holy Mother</h1>
      <p>Pick your favourite episode</p>
    </div>
  )
}

export default App;
