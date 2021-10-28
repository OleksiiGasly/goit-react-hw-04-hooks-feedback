import { useState } from 'react';
import FeedbackBtns from 'components/FeedbackBtns/FeedbackBtns';
import Statistics from 'components/Statistics/Statistics';
import Section from './components/Section/Section';
import NotificationMessage from 'components/NotificationMessage/NotificationMessage';

const App = () => {
  const [good, addGood] = useState(0);
  const [neutral, addNeutral] = useState(0);
  const [bad, addBad] = useState(0);

  const addToCounter = option => {
    switch (option) {
      case 'good':
        addGood(state => state + 1);
        break;
      case 'neutral':
        addNeutral(state => state + 1);
        break;
      case 'bad':
        addBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const totalCounter = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackCounter = () => {
    return Math.round((good * 100) / totalCounter());
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackBtns
          options={['good', 'neutral', 'bad']}
          onIncrement={addToCounter}
        />
      </Section>

      <Section title="Statistics">
        {totalCounter() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCounter()}
            positivePercentage={positiveFeedbackCounter()}
          />
        ) : (
          <NotificationMessage message="No feedback given" />
        )}
      </Section>
    </>
  );
};

export default App;
