import {useReducer} from "react";
import CounterFeedback from "./CounterFeedback";


const countInitialState = {
  
    good: 0,
    neutral: 0,
    bad: 0
  
};
 
function countReducer(state, action) {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + action.payload };
    case 'neutral':
      return { ...state, neutral: state.neutral + action.payload };
        case 'bad':
      return { ...state, bad: state.bad + action.payload };
    default:
      return;
    }

  };

export default function App() {
  const [state, dispatch] = useReducer(countReducer, countInitialState);

  const total = state.good + state.neutral + state.bad;
  const percentage = Math.round((Number(state.good) / Number(total)) * 100);
  
  const options = Object.keys(state)
  

  const handleClick = (option) => {
     dispatch({type: option, payload: 1})
  };


  return (
    < CounterFeedback 
        goodFeedback={state.good}
        neutralFeedback={state.neutral}
        badFeedback={state.bad}
        total={total}
        percentage={percentage}
        hendleClick={handleClick}
        options={options} 
      />
  )
 }

