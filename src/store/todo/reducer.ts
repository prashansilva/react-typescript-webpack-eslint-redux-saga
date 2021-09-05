import produce from 'immer'
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_FAILURE,
  CREATE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
} from './actionTypes'

import { TodoActions, TodoState } from './types'

const initialState: TodoState = {
  pending: false,
  todos: [],
  error: null,
}

export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return produce(state, (draft) => {
        draft.pending = true
      })
    case FETCH_TODO_SUCCESS:
      return produce(state, (draft) => {
        draft.pending = false
        draft.todos = action.payload.todos
        draft.error = null
      })
    case FETCH_TODO_FAILURE:
      return produce(state, (draft) => {
        draft.pending = false
        draft.todos = []
        draft.error = action.payload.error
      })
    case CREATE_TODO_REQUEST:
      return produce(state, (draft) => {
        draft.pending = true
      })
    case CREATE_TODO_SUCCESS:
      return produce(state, (draft) => {
        draft.pending = false
        draft.todos.push(action.payload.todo)
        draft.error = null
      })
    case CREATE_TODO_FAILURE:
      return produce(state, (draft) => {
        draft.pending = false
        draft.error = action.payload.error
      })
    case UPDATE_TODO_REQUEST:
      return produce(state, (draft) => {
        draft.pending = true
      })
    case UPDATE_TODO_SUCCESS:
      return produce(state, (draft) => {
        draft.pending = false
        draft.todos[
          draft.todos.findIndex((todo) => todo.id === action.payload.todo.id)
        ] = action.payload.todo
        draft.error = null
      })
    case UPDATE_TODO_FAILURE:
      return produce(state, (draft) => {
        draft.pending = false
        draft.error = action.payload.error
      })
    case DELETE_TODO_REQUEST:
      return produce(state, (draft) => {
        draft.pending = true
      })
    case DELETE_TODO_SUCCESS:
      return produce(state, (draft) => {
        draft.pending = false
        draft.todos.splice(
          draft.todos.findIndex((todo) => todo.id === action.payload.id),
          1
        )
        draft.error = null
      })
    case DELETE_TODO_FAILURE:
      return produce(state, (draft) => {
        draft.pending = false
        draft.error = action.payload.error
      })
    default:
      return {
        ...state,
      }
  }
}
