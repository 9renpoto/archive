import {
  captureException,
  init,
  showReportDialog,
  withScope
} from '@sentry/browser'
import React, { PureComponent } from 'react'
import { initGA, logPageView } from '../utils/analytics'

type Props = {}

export default class Layout extends PureComponent<Props, { error: any }> {
  constructor (props: Props) {
    super(props)
    init({
      dsn: 'https://f618bc349b614299939433b00e4be281@sentry.io/103445'
    })
    this.state = { error: null }
  }

  componentDidCatch (error, errorInfo) {
    this.setState({ error })
    withScope(scope => {
      Object.keys(errorInfo).forEach(key => scope.setExtra(key, errorInfo[key]))
      captureException(error)
    })
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
        <div className='snap' onClick={() => showReportDialog()}>
          <img src={'https://gph.is/2d6qsYy'} />
          <p>We're sorry — something's gone wrong.</p>
          <p>Our team has been notified, but click here fill out a report.</p>
        </div>
      )
    }
    return this.props.children
  }
}
