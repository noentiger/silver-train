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
              { property: 'fb:app_id', content: constants.meta.facebookAppId },
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
            {
              type: 'text/javascript',
              innerHTML: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${constants.analytics.facebookPixel}');
                fbq('track', 'PageView');
              `,
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
