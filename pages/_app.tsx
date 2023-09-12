import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@livekit/components-styles';
import '@livekit/components-styles/prefabs';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Gems Communications Progress Meeting"
        titleTemplate="%s"
        defaultTitle="Gems Communications Progress Meeting"
        description="Our Progress Meeting"
        twitter={{
          handle: '@livekitted',
          site: '@livekitted',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          url: 'https://meet.livekit.io',
          images: [
            {
              url: 'https://meet.livekit.io/images/livekit-meet-open-graph.png',
              width: 2000,
              height: 1000,
              type: 'image/png',
            },
          ],
          site_name: 'Progress Meeting',
        }}
        additionalMetaTags={[
          {
            property: 'theme-color',
            content: '#00bcd4',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/log.png',
          },
          {
            rel: 'apple-touch-icon',
            href: '/images/log.png',
            sizes: '180x180',
          },
          {
            rel: 'mask-icon',
            href: '/images/log.png',
            color: '#070707',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
