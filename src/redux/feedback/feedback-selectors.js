import { createSelector } from '@reduxjs/toolkit'; // Импорт функции для мемоизации селектора

const getfeedback = state => state.feedback;
const getGood = state => state.feedback.good;
const getNeutral = state => state.feedback.neutral;
const getBad = state => state.feedback.bad;

// Считает общее количество отзывов
const getTotalFeedback = createSelector(
  [getfeedback],

  feedback => {
    return Object.keys(feedback).reduce(
      (acc, value) => acc + feedback[value],
      0,
    );
  },
);

// Считает процент хороших отзывов
const getPositivePercent = createSelector(
  [getGood, getTotalFeedback],
  (good, total) => {
    return Math.round((good / total) * 100 || null);
  },
);

// eslint-disable-next-line
export default {
  getfeedback,
  getGood,
  getNeutral,
  getBad,
  getTotalFeedback,
  getPositivePercent,
};
