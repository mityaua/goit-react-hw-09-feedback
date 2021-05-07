import PropTypes from 'prop-types';
import StatisticsTotal from '../StatisticsTotal';
import Notification from '../Notification';

import styles from './Statistics.module.scss';

// Компонент списка отзывов
const Statistics = ({ feedback, total, percent }) => {
  return (
    <>
      {total ? (
        <>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p>
                Good: <span className={styles.value}>{feedback.good}</span>
              </p>
            </li>
            <li className={styles.item}>
              <p>
                Neutral:{' '}
                <span className={styles.value}>{feedback.neutral}</span>
              </p>
            </li>
            <li className={styles.item}>
              <p>
                Bad: <span className={styles.value}>{feedback.bad}</span>
              </p>
            </li>
          </ul>
          <StatisticsTotal total={total} percent={percent} />
        </>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

export default Statistics;
