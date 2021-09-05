// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import todoService from '../../services/todoService'

import {
  createTodoFailure,
  createTodoSuccess,
  deleteTodoFailure,
  deleteTodoSuccess,
  fetchTodoFailure,
  fetchTodoSuccess,
} from './actions'
import {
  CREATE_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  FETCH_TODO_REQUEST,
} from './actionTypes'

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSagaWorker() {
  const { data, error } = yield call(todoService.apiTodoGet)
  if (data)
    yield put(
      fetchTodoSuccess({
        todos: data,
      })
    )
  else
    yield put(
      fetchTodoFailure({
        error: error.message,
      })
    )
}

/*
  Starts worker saga on latest dispatched `CREATE_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* fetchTodoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSagaWorker)])
}

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* createTodoSagaWorker(action: any) {
  const { data, error } = yield todoService.apiTodoPost(action.todo)
  if (data)
    yield put(
      createTodoSuccess({
        todo: data,
      })
    )
  else
    yield put(
      createTodoFailure({
        error: error.message,
      })
    )
}

/*
  Starts worker saga on latest dispatched `CREATE_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* createTodoSaga() {
  yield all([takeLatest(CREATE_TODO_REQUEST, createTodoSagaWorker)])
}

/*
  Worker Saga: Fired on DELETE_TODO_REQUEST action
*/
function* deleteTodoSagaWorker(action: any) {
  const { data, error } = yield todoService.apiTestDelete(action.id)
  if (data)
    yield put(
      deleteTodoSuccess({
        id: action.id,
      })
    )
  else
    yield put(
      deleteTodoFailure({
        error: error.message,
      })
    )
}

/*
  Starts worker saga on latest dispatched `DELETE_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* deleteTodoSaga() {
  yield all([takeLatest(DELETE_TODO_REQUEST, deleteTodoSagaWorker)])
}

export default function* todoSaga() {
  yield all([fork(fetchTodoSaga), fork(createTodoSaga), fork(deleteTodoSaga)])
}
