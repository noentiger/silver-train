import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import StartPage from './StartPage'
import LivePage from './LivePage'
import NoMatch from '../components/NoMatch'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../components/Header';

export default class App extends Component {
  render(){
    return (
      <div>
        <Grid fluid>
          <Header />
          <Row center="xs">
            <Col xs={10} sm={8}>
              <Row className="content-wrapper" center="xs" middle="xs">
                <Col>
                  <Switch>
                    <Route exact path="/" component={StartPage}/>
                    <Route path="/live" component={LivePage}/>
                    <Route component={NoMatch}/>
                  </Switch>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
