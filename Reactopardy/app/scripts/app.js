import store from './store.js'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'
import StartPage from './components/start_page.js'
import CategoryView from './components/category_view.js'


export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={CategoryView} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}