import React from 'react';
import { Store } from './store';
import { IEpisodeProps } from './interfaces';

import { toggleFavAction } from './Actions'

const EpisodeList = React.lazy(() => import('./EpisodeList'))

function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store)

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  };

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <div className="">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
}

export default FavPage;
