import PropTypes from 'prop-types';
import styles from './StatisticsTotal.module.scss';

// Компонент результата подсчёта отзывов
const StatisticsTotal = ({ total, percent }) => {
  const positiveStyle =
    percent > 50 ? styles['value--high'] : styles['value--low'];

  return (
    <div>
      <p className={styles.item}>
        Total: <span className={styles.value}>{total}</span>
      </p>
      <p className={styles.item}>
        Positive feedback: <span className={positiveStyle}>{percent}%</span>
      </p>
    </div>
  );
};

StatisticsTotal.propTypes = {
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default StatisticsTotal;
