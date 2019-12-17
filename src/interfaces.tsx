/**
|--------------------------------------------------
| All the Interfaces
|--------------------------------------------------
*/

export interface IState {
  episodes: Array<IEpisode>
  favourites: Array<any>
}

export interface IAction {
  type: string
  payload: any
}

export interface IEpisodeProps {
  episodes: IEpisode[],
  store: { state: IState, dispatch: any}
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction,
  favourites: Array<IEpisode>
}

export interface IEpisode {
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
