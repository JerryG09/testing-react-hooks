import React, { useEffect, useContext } from 'react';
import { Store } from './store'
import { IEpisodeProps } from './interfaces';
import { fetchData, toggleFavAction } from './Actions'

const EpisodeList = React.lazy(() => import('./EpisodeList'))


function HomePage(): JSX.Element {
  const { state, dispatch } = useContext(Store)


  useEffect(() => {
    state.episodes.length === 0 && fetchData(dispatch)
    // return () => {
      //   cleanup
      // };
    })

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  }

  return (
    <>
      <React.Suspense fallback={<div>loading...</div>}>
        <div className="episode-layout">
          <EpisodeList {...props} />
        </div>
      </React.Suspense>
    </>
  )
}

export default HomePage;
