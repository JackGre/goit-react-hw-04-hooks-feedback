import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
     return (
    <ul className={styles.statList}>
        <li className={styles.statItem}>Good: {good}</li>
        <li className={styles.statItem}>Neutral: {neutral}</li>
        <li className={styles.statItem}>Bad: {bad}</li>
        <li className={styles.statItem}>Total: {total}</li>
        <li className={styles.statItem}>Positive feedback: {positivePercentage > 0 ? positivePercentage : 0}%</li>
    </ul>
     );
};


export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}