import {UserType} from "../types/types";
import {InferActionsTypes} from "./redux-store";

const initialState = {
    currentUser: null as UserType | null,
    users: [] as Array<UserType>,
    middleRegisterEmail: '',
    middleRegisterName: '',
    middleRegisterPassword: ''
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'AUTH/SET_CURRENT_USER':
            return {
                ...state,
                currentUser: {...action.payload.currentUser}
            }
        case 'AUTH/SET_USER':
            return {
                ...state,
                users: [...state.users, action.payload.user]
            }
        case 'AUTH/REMOVE_CURRENT_USER':
            return {
                ...state,
                currentUser: null
            }
        case 'AUTH/SET_MIDDLE_REGISTER_EMAIL':
            return {
                ...state,
                middleRegisterEmail: action.payload.email
            }
        case 'AUTH/SET_MIDDLE_REGISTER_NAME':
            return {
                ...state,
                middleRegisterName: action.payload.name
            }
        case 'AUTH/SET_MIDDLE_REGISTER_PASSWORD':
            return {
                ...state,
                middleRegisterPassword: action.payload.password
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setCurrentUser: (currentUser: UserType) => (
        {
            type: 'AUTH/SET_CURRENT_USER',
            payload: {currentUser: currentUser}
        } as const
    ),
    setUser: (user: UserType) => (
        {
            type: 'AUTH/SET_USER',
            payload: {user: user}
        } as const
    ),
    removeCurrentUser: () => (
        {
            type: 'AUTH/REMOVE_CURRENT_USER'
        } as const
    ),
    setMiddleRegisterEmail: (email: string) => (
        {
            type: 'AUTH/SET_MIDDLE_REGISTER_EMAIL',
            payload: {email: email}
        } as const
    ),
    setMiddleRegisterName: (name: string) => (
        {
            type: 'AUTH/SET_MIDDLE_REGISTER_NAME',
            payload: {name: name}
        } as const
    ),
    setMiddleRegisterPassword: (password: string) => (
        {
            type: 'AUTH/SET_MIDDLE_REGISTER_PASSWORD',
            payload: {password: password}
        } as const
    )
}

export default authReducer;