import React from 'react'
import style from '../css/style'

export default class extends React.Component {
  static getInitialProps ({req}) {
    return {
      server: !!req
    }
  }

  render () {
    const renderer = this.props.server ? 'Server' : 'Client'
    return (
      <div>
        <h1><span className={style}>{renderer}</span> says Hi!</h1>
        {!this.props.server &&
          <p>Try reloading the page...</p>
        }
      </div>
    )
  }
}
