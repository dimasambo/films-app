import {FilmType, ItemType, SearchedData} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {api} from "../api/api";

const initialState = {
    films: [] as Array<FilmType>
}

export type InitialStateType = typeof initialState

const filmsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'FILMS/SET_FILM':
            return {
                ...state,
                films: [...action.payload.films]
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setFilms: (films: Array<FilmType>) => (
        {
            type: 'FILMS/SET_FILM',
            payload: {films}
        } as const
    )
}

type ThunkType = BaseThunkType<ActionsType>

export const requestFilms = (page: number): ThunkType => {
    return async (dispatch) => {
        const data: Array<FilmType> = await api.getFilms(page);
        dispatch(actions.setFilms(data));
    }
}

export default filmsReducer;