import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import StartPage from './StartPage'
import LivePage from './LivePage'
import NoMatch from '../components/NoMatch'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import constants from '../constants';

export default class App extends Component {

  render() {
    return (
      <div>
        <Helmet
          title={constants.meta.title}
          meta={[
              { property: 'og:title', content: constants.meta.title },
              { property: 'og:image', content: constants.meta.image },
              { property: 'og:site_name', content: constants.meta.title },
              { property: 'og:url', content: constants.meta.url },
              { property: 'og:type', content: 'article' },
              { property: 'og:description', content: constants.meta.description },
              { name: 'description', content: constants.meta.description },
          ]}
          script={[
            {
              type: 'application/ld+json',
              innerHTML: `{
                  "@context": "http://schema.org",
                  "@type": "MusicGroup",
                  "name": "${constants.artist.name}",
                  "image": ${JSON.stringify(constants.artist.images)},
                  "track": ${JSON.stringify(constants.artist.tracks)}
              }`,
            },
          ]}
        />
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
          <Footer />
        </Grid>
      </div>
    )
  }
}
