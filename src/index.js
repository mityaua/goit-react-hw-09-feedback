import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/store'; // Обьект с методами, экземпляр редакса
import { Provider } from 'react-redux'; // Провайдер для доступности хранилища везде
import { PersistGate } from 'redux-persist/integration/react'; // Обёртка для локального и сесионного хранилища

import App from './App.jsx';

import 'modern-normalize/modern-normalize.css';
import './App.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
