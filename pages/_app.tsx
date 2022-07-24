import type { AppProps } from 'next/app';
import Head from 'next/head';

import Topbar from '../components/topbar/Topbar';
import Navigation from '../components/navigation/Navigation';
import { Container, Wrapper } from './_app.styled';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Container>
    <Head>
      <title>Workouts</title>
      <meta name="description" content="Create and log your workouts 🏋️" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Wrapper>
      <Topbar />
      <Component {...pageProps} />
      <Navigation />
    </Wrapper>
  </Container>
);

export default MyApp;
