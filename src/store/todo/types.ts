import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
} from './actionTypes'

export interface ITodo {
  id?: number
  name: string
}

export interface TodoState {
  pending: boolean
  todos: ITodo[]
  error: string | null
}

export interface FetchTodoSuccessPayload {
  todos: ITodo[]
}

export interface FetchTodoFailurePayload {
  error: string
}

export interface FetchTodoRequest {
  type: typeof FETCH_TODO_REQUEST
}

export type FetchTodoSuccess = {
  type: typeof FETCH_TODO_SUCCESS
  payload: FetchTodoSuccessPayload
}

export type FetchTodoFailure = {
  type: typeof FETCH_TODO_FAILURE
  payload: FetchTodoFailurePayload
}

export interface CreateTodoSuccessPayload {
  todo: ITodo
}

export interface CreateTodoFailurePayload {
  error: string
}

export interface CreateTodoRequest {
  type: typeof CREATE_TODO_REQUEST
  todo: ITodo
}

export type CreateTodoSuccess = {
  type: typeof CREATE_TODO_SUCCESS
  payload: CreateTodoSuccessPayload
}

export type CreateTodoFailure = {
  type: typeof CREATE_TODO_FAILURE
  payload: CreateTodoFailurePayload
}

export interface UpdateTodoSuccessPayload {
  todo: ITodo
}

export interface UpdateTodoFailurePayload {
  error: string
}

export interface UpdateTodoRequest {
  type: typeof UPDATE_TODO_REQUEST
  todo: ITodo
}

export type UpdateTodoSuccess = {
  type: typeof UPDATE_TODO_SUCCESS
  payload: UpdateTodoSuccessPayload
}

export type UpdateTodoFailure = {
  type: typeof UPDATE_TODO_FAILURE
  payload: UpdateTodoFailurePayload
}

export interface DeleteTodoSuccessPayload {
  id: number
}

export interface DeleteTodoFailurePayload {
  error: string
}

export interface DeleteTodoRequest {
  type: typeof DELETE_TODO_REQUEST
  id: number
}

export type DeleteTodoSuccess = {
  type: typeof DELETE_TODO_SUCCESS
  payload: DeleteTodoSuccessPayload
}

export type DeleteTodoFailure = {
  type: typeof DELETE_TODO_FAILURE
  payload: DeleteTodoFailurePayload
}

export type TodoActions =
  | FetchTodoRequest
  | FetchTodoSuccess
  | FetchTodoFailure
  | CreateTodoRequest
  | CreateTodoSuccess
  | CreateTodoFailure
  | UpdateTodoRequest
  | UpdateTodoSuccess
  | UpdateTodoFailure
  | DeleteTodoRequest
  | DeleteTodoSuccess
  | DeleteTodoFailure
