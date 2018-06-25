import React from 'react';
import Helmet from 'react-helmet';
import constants from '../constants';

const HelmetData = () => (
  <Helmet>
    <title>{constants.meta.title}</title>
    <meta property="og:title" content={constants.meta.title} />
    <meta property="og:image" content={constants.meta.image} />
    <meta property="og:site_name" content={constants.meta.title} />
    <meta property="og:url" content={constants.meta.url} />
    <meta property="og:type" content="article" />
    <meta property="og:description" content={constants.meta.description} />
    <meta name="description" content={constants.meta.description} />
    <meta property="fb:app_id" content={constants.meta.facebookAppId} />

    <script type="application/ld+json">
      {`
        {
          "@context": "http://schema.org",
          "@type": "MusicGroup",
          "name": "${constants.artist.name}",
          "image": ${JSON.stringify(constants.artist.images)},
          "track": ${JSON.stringify(constants.artist.tracks)}
        }
      `}
    </script>

    <script type="text/javascript">
      {
        `
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
        `
      }
    </script>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112226557-1"></script>

    <script type="text/javascript">
      {
        `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-112226557-1');
        `
      }
    </script>

    <noscript>
      {`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${constants.analytics.facebookPixel}&ev=PageView&noscript=1"/>`}
    </noscript>

  </Helmet>
);

export default HelmetData;
