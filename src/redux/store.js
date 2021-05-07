import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; // Функциии для работы с локальными и сессиями + игнор ворнинга в консоли
import sessionStorage from 'redux-persist/lib/storage/session'; // Импорт сессионного хранилища

// Редюсер по фидбекам
import feedbackReducer from './feedback/feedback-reducer';

// Прослойки
const middleware = {
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
};

// Корневой редюсер
const rootReducer = combineReducers({
  feedback: feedbackReducer,
});

// Конфиг персистора
const feedbackpersistConfig = {
  key: 'feedback',
  storage: sessionStorage,
};

// Персист редюсер (можно упростить...)
const persistedReducer = persistReducer(feedbackpersistConfig, rootReducer);

// Создает хранилище + корневой редюсер + тулзами только для разработки
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

// Обёртка над стором
const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
