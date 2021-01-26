import { AppProps } from 'next/app';
import NavBar from '../components/navBar';
import '../styles/custom.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
