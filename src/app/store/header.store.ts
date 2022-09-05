import { createAction, createReducer, on } from "@ngrx/store"

export interface IHeader{
  title: string;
  isLogged: boolean;
}
export const initialValue: IHeader = {
  title: "Login",
  isLogged: false
}


export const loginAction = createAction("[Login] Login action");
export const unsign = createAction("[Login] Unsign action");



export const loginReducer = createReducer(
  initialValue,
  on(loginAction, (state) => {
    return {...state, title: 'Logado', isLogged: true}
  }),

  on(unsign, (state) => {
    return {...state, title: 'Não logado', isLogged: false}
  })
)
