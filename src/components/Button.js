import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
export default class Button extends Component {
  renderSubmit (language) {
    return language === 'english' ? 'Submit' : 'Voorleggen'
  }

  renderButton (color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render () {
    // consumer is good where we are consuming multiple context values
    // context is good where we are doing just one value
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

// or Button.contextType = LanguageContext instead of above
