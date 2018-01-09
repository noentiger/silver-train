import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../actions/user'
import { Link } from 'react-router-dom'
import './FirstPage.css'

class FirstPage extends Component {
  render() {
    return (
      <div>
        <p>{`Email: ${this.props.user.email}`}</p>
        <Link to={'/second'}>Next</Link>
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
