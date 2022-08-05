import { StrictMode } from 'react';

// third-party
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// project imports
import App from 'App';
import { persister, store } from 'store';
import reportWebVitals from 'reportWebVitals';
import { ConfigProvider } from 'contexts/ConfigContext';

// ------------------------| MAIN - REACT APP  |------------------------ //

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
