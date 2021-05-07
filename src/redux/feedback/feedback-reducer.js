import { createReducer } from '@reduxjs/toolkit'; // Импорт функции создания редюсера
import {onLeaveFeedback} from './feedback-actions'; // Импорт названия экшена

// Изначальный стейт обьекта федбеков
const feedbackInitialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

// Редюсер фидбеков
const feedbackReducer = createReducer(feedbackInitialState, {
  [onLeaveFeedback]: (state, { payload }) =>
    void {
      ...state,
      [payload]: (state[payload] += 1),
    },
});

export default feedbackReducer;
