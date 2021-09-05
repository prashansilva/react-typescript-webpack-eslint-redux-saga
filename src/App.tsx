import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styles from './App.scss'
import TodoPageComponent from './pages/todo/TodoPageComponent'
function App() {
  return (
    <div className={styles.title}>
      <Switch>
        <Route exact path="/" component={TodoPageComponent} />
      </Switch>
    </div>
  )
}

export default App
