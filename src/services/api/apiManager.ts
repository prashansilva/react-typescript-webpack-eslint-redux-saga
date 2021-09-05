import axios from 'axios'
import { networkError, networkSettingError } from '../../utils/constants'

const http = axios.create({
  baseURL: process.env.baseUrl,
  headers: {
    'Content-type': 'application/json',
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorHandling = (error: any) => {
  const errorObject = {
    error: {
      message: '',
    },
  }
  if (error.response) {
    // Request made and server responded
    errorObject.error.message = error.response.data.message
  } else if (error.request) {
    // The request was made but no response was received
    errorObject.error.message = networkError
  } else {
    // Something happened in setting up the request that triggered an Error
    errorObject.error.message = networkSettingError
  }
  console.log(errorObject)
  return errorObject
}

class ApiService {
  /**
   * Api get function.
   * @param {string} path path.
   */
  async apiGet(path: string) {
    const response = await http
      .get(path)
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        return errorHandling(error)
      })
    console.log(response)
    return response
  }

  /**
   * Api post function.
   * @param {Object} body body.
   * @param {string} path path.
   */
  async apiPost(path: string, body: Record<string, unknown>) {
    const json = JSON.stringify(body)
    const response = await http
      .post(path, json)
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        return errorHandling(error)
      })

    return response
  }

  /**
   * Api put function.
   * @param {Object} body body.
   * @param {string} path path.
   * @param {number} id id.
   */
  async apiPut(path: string, id: number, body: Record<string, unknown>) {
    const json = JSON.stringify(body)
    const response = await http
      .put(`${path}/${id}`, json)
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        return errorHandling(error)
      })

    return response
  }

  /**
   * Api delete function.
   * @param {string} path path.
   * @param {number} id id.
   */
  async apiDelete(path: string, id: number) {
    const response = await http
      .delete(`${path}/${id}`)
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        return errorHandling(error)
      })

    return response
  }
}

export default new ApiService()
