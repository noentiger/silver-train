import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import NoMatch from '../components/NoMatch'
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class App extends Component {
  render(){
    return (
      <div>
        <Grid fluid>
            <Row>
                <Col xs={6} md={3}>
                    Hello, world!
                </Col>
            </Row>
        </Grid>
        <Switch>
          <Route exact path="/" component={FirstPage}/>
          <Route path="/second" component={SecondPage}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}
