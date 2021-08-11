import React from 'react';
import styles from './CounterFeedback.module.css';
import PropTypes from "prop-types";

import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';


const CounterFeedbac = ({
    goodFeedback, 
    neutralFeedback, 
    badFeedback,
    total, 
    percentage,
    hendleClick,
    options,
 }) => {
        return (
            <div className={styles.CounterFeedback}>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={options} onLeaveFeedback={hendleClick} />
                </Section>
                {total > 0 ? (
                    <Section title="Statistics">
                        <Statistics
                            good={goodFeedback}
                            neutral={neutralFeedback}
                            bad={badFeedback}
                            total={total}
                            positivePercentage={percentage}
                        />
                    </Section>
                ) : (
                    <Notification message="No feedback given" />
                )}
            </div>
        );
    };

export default CounterFeedbac;

CounterFeedbac.propTypes = {
    goodFeedback: PropTypes.number, 
    neutralFeedback: PropTypes.number,
    badFeedback: PropTypes.number,
    total: PropTypes.number, 
    percentage: PropTypes.number,
    hendleClick: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),

}