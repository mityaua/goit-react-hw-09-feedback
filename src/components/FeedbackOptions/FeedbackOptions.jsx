import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.scss';

// Компонент кнопок для отзывов
const FeedbackOptions = ({ feedback, onLeaveFeedback }) => {
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
};

FeedbackOptions.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
