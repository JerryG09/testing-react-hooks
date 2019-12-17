import { IAction, IEpisode, IState } from './interfaces';

export const fetchData = async (dispatch: any) => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
  const data = await fetch(URL)
  const dataJSON = await data.json()
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes
  })
}

export const toggleFavAction = (dispatch: any, state: IState, episode: IEpisode | any): IAction => {

  const episodeInFav = state.favourites.includes(episode)

  // console.log(state);

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
