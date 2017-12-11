import React, { PureComponent } from 'react'
import { initGA, logPageView } from '../utils/analytics'

export default class Layout extends PureComponent {
  componentDidMount () {
    const w: any = window
    if (!w.GA_INITIALIZED) {
      initGA()
      w.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return <div>{this.props.children}</div>
  }
}
