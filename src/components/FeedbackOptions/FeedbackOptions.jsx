import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import feedbackSelectors from '../../redux/feedback/feedback-selectors';
import * as actions from '../../redux/feedback/feedback-actions'; // Импорт всех экшенов из папки фидбека

import styles from './FeedbackOptions.module.scss';

// Компонент кнопок для отзывов
export default function FeedbackOptions() {
  const feedback = useSelector(feedbackSelectors.getfeedback); // Селектор всего обьекта фидбеков

  const dispatch = useDispatch();

  // Диспатч экшена для получения надписи кнопки
  const onLeaveFeedback = useCallback(
    e => {
      dispatch(actions.onLeaveFeedback(e.target.textContent));
    },
    [dispatch],
  );

  return (
    <ul className={styles.list}>
      {Object.keys(feedback).map(btnName => {
        return (
          <li className={styles.item} key={btnName}>
            <button
              className={styles.button}
              type="button"
              onClick={onLeaveFeedback}
            >
              {btnName}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
