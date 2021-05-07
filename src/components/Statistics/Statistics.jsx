import { useSelector } from 'react-redux';

import feedbackSelectors from '../../redux/feedback/feedback-selectors';

import StatisticsTotal from '../StatisticsTotal';

import styles from './Statistics.module.scss';

// Компонент списка отзывов
export default function Statistics() {
  const good = useSelector(feedbackSelectors.getGood);
  const neutral = useSelector(feedbackSelectors.getNeutral);
  const bad = useSelector(feedbackSelectors.getBad);
  const total = useSelector(feedbackSelectors.getTotalFeedback);
  const percent = useSelector(feedbackSelectors.getPositivePercent);

  return (
    <>
      {total ? (
        <>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p>
                Good: <span className={styles.value}>{good}</span>
              </p>
            </li>
            <li className={styles.item}>
              <p>
                Neutral: <span className={styles.value}>{neutral}</span>
              </p>
            </li>
            <li className={styles.item}>
              <p>
                Bad: <span className={styles.value}>{bad}</span>
              </p>
            </li>
          </ul>
          <StatisticsTotal total={total} percent={percent} />
        </>
      ) : (
        <p>
          No feedback given{' '}
          <span role="img" aria-label="nothing face">
            🤷‍♂️
          </span>
        </p>
      )}
    </>
  );
}
