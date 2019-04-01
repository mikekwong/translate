import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
export default class Button extends Component {
  renderSubmit (value) {
    return value === 'english' ? 'Submit' : 'Voorleggen'
  }
  render () {
    return (
      <button className='ui button primary'>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
}

// or Button.contextType = LanguageContext instead of above
