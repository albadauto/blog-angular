import { createAction, createReducer, on } from "@ngrx/store"


export const initialValue = {
  title: "Login"
}


export const loginAction = createAction("[Login] Login action");


export const loginReducer = createReducer(
  initialValue,
  on(loginAction, (state) => {
    return {...state, title: 'Logado'}
  })
)
