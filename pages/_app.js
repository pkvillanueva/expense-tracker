import { Provider } from 'react-redux';
import { useStore } from '../lib/store';
import '../styles/global.css';
import 'normalize.css';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
