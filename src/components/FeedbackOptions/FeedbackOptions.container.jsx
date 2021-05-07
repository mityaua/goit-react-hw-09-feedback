import { connect } from 'react-redux'; // Импорт функции конекта к глобальному хранилищу
import * as actions from '../../redux/feedback/feedback-actions'; // Импорт всех экшенов из папки фидбека

import FeedbackOptions from './FeedbackOptions'; // Импорт компонента в контейнер

// Из стейта в пропы
const mapStateToProps = state => ({
  feedback: state.feedback,
});

// Из стейта в пропы для методов
const mapDispatchToProps = dispatch => ({
  onLeaveFeedback: event =>
    dispatch(actions.onLeaveFeedback(event.target.textContent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackOptions);
