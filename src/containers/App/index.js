// @flow

import React from 'react'
import { Route, Switch } from 'react-router'
import injectSheet from 'react-jss'

import { style } from './style'

type PrivateAppProps = {
  classes: Object,
}

const container = {
  backgroundColor: '#F9F9F9',
  minHeight: '100%',
  width: '100%',
}

@injectSheet(style)
export class PrivateApp extends React.Component< PrivateAppProps, void> {
  render() {
    const {
      classes,
    } = this.props
    return (
      <div className={classes.root}>
        <AppToolBarContainer />
        <AppMenu />
        <Switch>
          <Route path="/logout" />
          <Route path="/album" component={DashboardContainer} />
          <Route exact path="/" component={DashboardContainer} />
        </Switch>
      </div>
    )
  }
}
export const PublicApp = (Component: Function) => {
  const WrapComponent = (props: any) => (
    <div style={container}>
      <Component {...props} />
    </div>
  )
  return WrapComponent
}
