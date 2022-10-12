import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default function Statistics({ title, statistics }) {
  const getRandomBgColorStyle = () => ({
    backgroundColor: 'hsl(' + Math.random() * 360 + ', 100%, 75%)',
  });

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {statistics.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles.item}
              key={id}
              style={getRandomBgColorStyle()}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
