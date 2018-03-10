import * as Raven from 'raven-js'
import React, { PureComponent } from 'react'
import { initGA, logPageView } from '../utils/analytics'

type Props = {}

export default class Layout extends PureComponent<Props, { error: any }> {
  constructor (props: Props) {
    super(props)
    Raven.config(
      'https://f618bc349b614299939433b00e4be281@sentry.io/103445'
    ).install()
    this.state = { error: null }
  }

  componentDidCatch (error, errorInfo) {
    this.setState({ error })
    Raven.captureException(error, { extra: errorInfo })
  }

  componentDidMount () {
    const w: any = window
    if (!w.GA_INITIALIZED) {
      initGA()
      w.GA_INITIALIZED = true
    }
    logPageView()
  }

  render () {
    if (this.state.error) {
      return (
        <div
          className='snap'
          onClick={() => Raven.lastEventId() && Raven.showReportDialog()}
        >
          <img src={'https://gph.is/2d6qsYy'} />
          <p>We're sorry — something's gone wrong.</p>
          <p>Our team has been notified, but click here fill out a report.</p>
        </div>
      )
    }
    return this.props.children
  }
}
