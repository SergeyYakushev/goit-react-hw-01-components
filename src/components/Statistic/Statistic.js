import PropTypes from 'prop-types';
import s from './Statistic.module.css';

function Statistic({ title, stats }) {
  return (
    <section className={s.statistics}>
      {{ title } && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getRandomColor() {
  var hex = Math.floor(Math.random() * 0xffffff);
  return '#' + ('000000' + hex.toString(16)).substr(-6);
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistic;
