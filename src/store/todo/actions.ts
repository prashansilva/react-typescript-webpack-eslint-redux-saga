import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_FAILURE,
  FETCH_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
} from './actionTypes'
import {
  FetchTodoRequest,
  FetchTodoSuccess,
  FetchTodoSuccessPayload,
  FetchTodoFailure,
  FetchTodoFailurePayload,
  CreateTodoFailure,
  CreateTodoFailurePayload,
  CreateTodoRequest,
  CreateTodoSuccessPayload,
  CreateTodoSuccess,
  ITodo,
  DeleteTodoRequest,
  DeleteTodoSuccessPayload,
  DeleteTodoSuccess,
  DeleteTodoFailurePayload,
  DeleteTodoFailure,
} from './types'

export const fetchTodoRequest = (): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
})

export const fetchTodoSuccess = (
  payload: FetchTodoSuccessPayload
): FetchTodoSuccess => ({
  type: FETCH_TODO_SUCCESS,
  payload,
})

export const fetchTodoFailure = (
  payload: FetchTodoFailurePayload
): FetchTodoFailure => ({
  type: FETCH_TODO_FAILURE,
  payload,
})

export const createTodoRequest = (todo: ITodo): CreateTodoRequest => ({
  type: CREATE_TODO_REQUEST,
  todo,
})

export const createTodoSuccess = (
  payload: CreateTodoSuccessPayload
): CreateTodoSuccess => ({
  type: CREATE_TODO_SUCCESS,
  payload,
})

export const createTodoFailure = (
  payload: CreateTodoFailurePayload
): CreateTodoFailure => ({
  type: CREATE_TODO_FAILURE,
  payload,
})

export const deleteTodoRequest = (id: number): DeleteTodoRequest => ({
  type: DELETE_TODO_REQUEST,
  id,
})

export const deleteTodoSuccess = (
  payload: DeleteTodoSuccessPayload
): DeleteTodoSuccess => ({
  type: DELETE_TODO_SUCCESS,
  payload,
})

export const deleteTodoFailure = (
  payload: DeleteTodoFailurePayload
): DeleteTodoFailure => ({
  type: DELETE_TODO_FAILURE,
  payload,
})
