import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';

function EntryApp({ Component, pageProps } : AppProps) {
  return (<Component {...pageProps} />);
}

export default EntryApp;
