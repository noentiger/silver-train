import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../actions/user'
import './StartPage.css'

class FirstPage extends Component {
  render() {
    return (
      <div>
        <h1 className="text-white">Ny singel ute!</h1>
        <h2 className="text-white"><small>Riv mig itu</small></h2>
        <iframe title="song" src="https://open.spotify.com/embed?uri=spotify:track:5A19jKYDsMckBCltYXkpVK" width="300" height="80" frameBorder="0" allowTransparency="true" style={{border: 'none', overflow: 'hidden'}}></iframe>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstPage)
