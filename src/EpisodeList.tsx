import React from 'react'
import { IEpisode } from './interfaces'

function EpisodeList (props: any)  {
  const { episodes, toggleFavAction, favourites, store} = props;

  const { state, dispatch } = store
  return episodes.map((episode: IEpisode) => {
    return (
      <div className="episode-box" key={episode.id}>
        <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`}  />
        <div className="">{episode.name}</div>
        <div className="">
          <div className="" style={{ display: "flex", justifyContent: "space-between"}}>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
            {favourites.find((fav: IEpisode) => fav.id === episode.id) ? "Unfav" : "Fav"}
          </button>
        </div>
      </div>
    )
  })
}


export default EpisodeList
