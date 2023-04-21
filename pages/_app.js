import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';
import { Navbar, Footer } from '../components';
import { NFTContext, NFTProvider } from '../context/NFTContext';

const App = ({ Component, pageProps }) => (
  <NFTProvider>
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <div
          className="pt-65"
        >
          <Component {...pageProps} />;
        </div>
        <Footer />
      </div>
      <Script src="https://kit.fontawesome.com/64cfaf08b3.js" crossOrigin="anonymous" />
    </ThemeProvider>
  </NFTProvider>
);

export default App;
