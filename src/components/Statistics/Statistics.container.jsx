import { connect } from 'react-redux'; // Импорт функции конекта к глобальному хранилищу
import Statistics from './Statistics' // Импорт компонента в контейнер

// Считает общее количество отзывов
const getTotalFeedback = state =>
  Object.keys(state).reduce((acc, value) => acc + state[value], 0);

// Считает процент хороших отзывов
const getPositivePercent = (goodFeedback, totalFeedback) =>
  Math.round((goodFeedback / totalFeedback) * 100 || null);

// Из стейта в пропы
const mapStateToProps = state => ({
  feedback: state.feedback,
  total: getTotalFeedback(state.feedback),
  percent: getPositivePercent(
    state.feedback.good,
    getTotalFeedback(state.feedback),
  ),
});

export default connect(mapStateToProps)(Statistics);