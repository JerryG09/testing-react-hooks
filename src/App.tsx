import React, { useContext, useEffect } from 'react'
import { Store } from './store'
import { IAction, IEpisode } from './interfaces'

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

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode)
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode
    }
    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id)
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode
      }
    }
    return dispatch(dispatchObj)
  }
  

  return (
    <div>
      <header className="header">
        <h1>Holy Mother</h1>
        <p>Pick your favourite episode</p>
      </header>
      <div className="episode-layout">
        {state.episodes.map((episode: IEpisode) => {
          return (
            <div className="episode-box" key={episode.id}>
              {/* <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`}  /> */}
              <div className="">{episode.name}</div>
              <div className="">
                <div className="">Season: {episode.season} Number: {episode.number}</div>
                <button type="button" onClick={() => toggleFavAction(episode)}>
                  {state.favourites.find((fav: IEpisode) => fav.id === episode.id) ? "Unfav" : "Fav"}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App;
