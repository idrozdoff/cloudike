import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, jssPreset, createMuiTheme } from '@material-ui/core/styles'
import JssProvider from 'react-jss/lib/JssProvider'
import { create, SheetsRegistry } from 'jss'
import { jssTheme, jssStyle } from './styles/jss'
import { store, history } from './store'
import { PrivateApp, PublicApp } from './containers/App'
import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from './config/auth'
import { Login } from './containers/Login'

const root = document.getElementById('root')

const jss = create({
  ...jssPreset(),
  insertionPoint: 'jss-insertion-point',
})

const sheetsRegistry = new SheetsRegistry()
const theme = createMuiTheme(jssTheme)

const sheet = jss.createStyleSheet(jssStyle)
sheet.attach()

ReactDOM.render(
  <Provider store={store}>
    <JssProvider jss={jss} regestry={sheetsRegistry}>
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <Fragment>
            <Switch>
              <Route path="/logout" />
              <Route path="/login" component={userIsNotAuthenticated(PublicApp(Login))} />
              <Route
                path="/"
                component={userIsAuthenticated(PublicApp(PrivateApp)
                )}
              />
            </Switch>
          </Fragment>
        </Router>
      </MuiThemeProvider>
    </JssProvider>
  </Provider>,
  root
)
