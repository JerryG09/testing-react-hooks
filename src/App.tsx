import React, { useContext, useEffect } from 'react'
import { Store } from './store'
import { IAction, IEpisode, IEpisodeProps } from './interfaces';

const EpisodeList = React.lazy(() => import('./EpisodeList'))

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
  console.log(state);

  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favourites: state.favourites
  }


  return (
    <div>
      <header className="header">
        <div className="">
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode</p>
        </div>
        <div className="">
          Favourite(s): {state.favourites.length}
        </div>
      </header>
      <React.Suspense fallback={<div>loading...</div>}>
        <div className="episode-layout">
        <EpisodeList {...props} />
        </div>
      </React.Suspense>
    </div>
  )
}

export default App;
