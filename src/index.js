import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from "react-router-dom";

import { persistedStore, store } from './store';
import { ModalProvider } from './components/ModalRework';
import { App } from './App';

import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <HashRouter>
          <ModalProvider>
            <App />
          </ModalProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
