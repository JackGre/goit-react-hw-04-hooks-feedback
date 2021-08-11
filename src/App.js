import React, {Component} from "react";
import CounterFeedback from "./CounterFeedback";



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (key) => {
    this.setState((state) => ({
      [key]: state[key] + 1,
    }));
  };
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage = (total) => {
    return Math.round((Number(this.state.good) / Number(total)) * 100);
  }
  
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total);
    const options = Object.keys(this.state);

    return(
      < CounterFeedback 
        goodFeedback={good}
        neutralFeedback={neutral}
        badFeedback={bad}
        total={total}
        percentage={percentage}
        hendleClick={this.handleClick}
        options={options} 
      />
    );
  }
}

export default App;
