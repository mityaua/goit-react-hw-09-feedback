import PropTypes from 'prop-types';
import styles from './StatisticsTotal.module.scss';

// Компонент результата подсчёта отзывов (общее количество + процент хороших)
export default function StatisticsTotal({ total, percent }) {
  const positiveStyle =
    percent > 50 ? styles['positive--high'] : styles['positive--low'];

  return (
    <div>
      <p className={styles.total}>
        Total: <span className={styles.total__value}>{total}</span>
      </p>

      <p className={styles.positive}>
        Positive feedback:{' '}
        {!!percent ? (
          <span className={positiveStyle}>{percent}%</span>
        ) : (
          <span role="img" aria-label="confused face">
            😕
          </span>
        )}
      </p>
    </div>
  );
}

StatisticsTotal.propTypes = {
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
