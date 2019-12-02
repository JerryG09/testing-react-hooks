import React, { useContext, useEffect } from 'react'
import {Store} from './store'

interface IEpisode {
  id: number
  url: string
  name: string
  season: number
  number: number
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  image: {medium: string, original: string}
  summary: string
}

function App(): JSX.Element {
  const {state, dispatch} = useContext(Store)

  useEffect(() => {
    state.episodes.length === 0 && fetchData()
    // return () => {
    //   cleanup
    // };
  })

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
      <div className="">
        {state.episodes.map((episode: IEpisode) => {
          return (
            <div className="" key={episode.id}>
              {/* <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`} /> */}
              <div className="">{episode.name}</div>
              <div className="">
                Season: {episode.season} Number: {episode.number}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App;
