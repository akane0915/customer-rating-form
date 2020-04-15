import React, { useState } from 'react';
import './styles.scss';

const App = () => {
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [rating, setRating] = useState([]);

  const buildRatingOptions = () => {
    const availableOptions = [1, 2, 3, 4, 5];

    return availableOptions.map((option) => {
      return (
        <label
          key={option}
          className={rating.includes(option) ? 'filled' : ''}
          onClick={() => { updateRating(option) }}
          htmlFor={option}>
          <input type='radio' id={option} name={option} value={option} />
          {option}
        </label>
      )
    })
  }

  const updateRating = (value) => {
    const ratingArray = new Array(value);

    for (let index = 0; index < ratingArray.length; index++) {
      ratingArray[index] = index + 1;
    }

    setSubmitEnabled(true);
    setRating(ratingArray);
  }

  const skip = () => {
    //skip logic goes here
    console.log('skip!');
  }

  return (
    <div className={'app'}>
      <form
        method="get">
        <h1>We love to hear your feedback!</h1>
        <p>On a scale of 1-5, how likely are you to recommend this service?</p>
        <div className='rating-options'>
          {buildRatingOptions()}
        </div>
        <div className='action-buttons'>
          <button
            className='skip'
            onClick={() => skip()}>
            Skip
          </button>
          <input
            aria-label='submit'
            className='submit'
            disabled={!submitEnabled}
            type='submit'
            value={'Submit'} />
        </div>
      </form>
    </div >
  );
};

export default App;

