import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col } from 'react-flexbox-grid';

import * as userActions from '../actions/user'
import './StartPage.css'

class FirstPage extends Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <Row center="xs">
            <Col className="content-wrapper">
              <iframe title="Listen to Kim Wijk on Spotify" src="https://open.spotify.com/embed?uri=spotify:track:5A19jKYDsMckBCltYXkpVK" width="300" height="80" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </Col>
          </Row>
          <Row center="xs">
            <Col className="content-wrapper">
              <iframe title="Follow Kim Wijk on Spotify" src="https://open.spotify.com/follow/1/?uri=spotify:artist:0MegUhRAG8cKnF8PZ3zsP7&size=detail&theme=dark&show-count=0" width={170} height={56} scrolling="no" frameBorder="0" style={{border:"none", overflow:"hidden"}} allowTransparency="true" />
            </Col>
          </Row>
        </Grid>
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


//
// <Row center="xs">
//   <Col>
//     <Row>
      // <Col style={{padding: 20}} className="content-wrapper">
      //   <iframe title="Listen to Kim Wijk on Spotify" src="https://open.spotify.com/embed?uri=spotify:track:5A19jKYDsMckBCltYXkpVK" width="300" height="80" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      // </Col>
//     </Row>
//   </Col>
//   <Col>
//     <Row>
      // <Col style={{padding: 20}} className="content-wrapper">
      //   <iframe title="Follow Kim Wijk on Spotify" src="https://open.spotify.com/follow/1/?uri=spotify:artist:0MegUhRAG8cKnF8PZ3zsP7&size=detail&theme=dark&show-count=0" width={170} height={56} scrolling="no" frameBorder="0" style={{border:"none", overflow:"hidden"}} allowTransparency="true" />
      // </Col>
//     </Row>
//   </Col>
// </Row>
