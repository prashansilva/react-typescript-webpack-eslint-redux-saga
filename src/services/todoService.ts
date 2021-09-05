import apiService from './api/apiManager'

class TodoDataService {
  /**
   * Todo get function.
   */
  async apiTodoGet() {
    return apiService.apiGet('/todo/list')
  }

  /**
   * Todo post function.
   * @param {Object} todo todo.
   */
  async apiTodoPost(todo: {
    name: string
  }) {
    return apiService.apiPost('/todo/', todo)
  }

  /**
   * Todo put function.
   * @param {Object} todo todo.
   * @param {number} id todo id.
   * @param {string} name todo name.
   */
  async apiTodoPut(todo: { id: number; name: string }) {
    return apiService.apiPut('/todo', todo.id, todo)
  }

  /**
   * Test delete function.
   * @param {number} id todo id.
   */
  async apiTodoDelete(id: number) {
    return apiService.apiDelete('/todo', id)
  }
}

export default new TodoDataService()
