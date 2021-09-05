import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createTodoRequest,
  deleteTodoRequest,
  fetchTodoRequest,
} from '../../store/todo/actions'
import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from '../../store/todo/selectors'

const TodoPageComponent: FC = () => {
  const dispatch = useDispatch()
  const pending = useSelector(getPendingSelector)
  const todos = useSelector(getTodosSelector)
  const error = useSelector(getErrorSelector)

  useEffect(() => {
    dispatch(fetchTodoRequest())
  }, [dispatch])

  function handleAddTodo() {
    const todo = {
      name: 'New Todo',
    }
    dispatch(createTodoRequest(todo))
  }

  /**
   * Status Update on Maintainance.
   * @param {string} id maintainance id.
   */
  function handleDeleteTodo(id: number) {
    dispatch(deleteTodoRequest(id))
  }

  return (
    <div style={{ padding: '15px' }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          {todos.map((todo, index) => (
            <>
              <div style={{ marginBottom: '10px' }} key={todo.id}>
                {++index}. {todo.firstName}
              </div>
              <button
                key={`button-${todo.id}`}
                onClick={() => {
                  handleDeleteTodo(todo.id ? todo.id : 0)
                }}
              ></button>
            </>
          ))}
          <button onClick={handleAddTodo}>+</button>
        </>
      )}
    </div>
  )
}

export default TodoPageComponent
