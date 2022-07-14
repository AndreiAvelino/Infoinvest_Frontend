import { createAction, createReducer, on, props } from "@ngrx/store"

export interface IAppStore{
    token: string
}

const appStoreInitialState: IAppStore = {
    token: "",
}

export const inserirToken = createAction('Insere token', props<{payload: string}>())

export const appReducer = createReducer(
    appStoreInitialState,

    on(inserirToken, (store, {payload}) => {
        return {
            ...store,
            token: payload
        }
    }),




)