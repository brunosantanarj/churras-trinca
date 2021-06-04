import '../public/styles/base.css';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';

function EntryApp({ Component, pageProps } : AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default EntryApp;
