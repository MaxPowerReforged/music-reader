import { AppProps } from 'next/app';
import '../styles/custom.scss';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
