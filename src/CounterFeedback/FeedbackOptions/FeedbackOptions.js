import React from 'react';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={styles.buttonList}>
            {options.map((option) => {
                return (
                    <li key={option}>
                        <button
                        type="button"
                        onClick={() => {
                            onLeaveFeedback(option);
                        }}>
                        {option.slice(0, 1).toUpperCase() + option.slice(1)}
                        </button>
                    </li>
                );
            })}
    
        </ul>
    )
};

export default FeedbackOptions;