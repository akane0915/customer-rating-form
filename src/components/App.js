import React, { useState } from 'react';
import './styles.scss';

const App = () => {
  const [selectionMade, setSelectionMade] = useState(false);
  const [rating, SetRating] = useState([]);

  const updateRating = (value) => {
    const ratingArray = new Array(value);

    for (let index = 0; index < ratingArray.length; index++) {
      ratingArray[index] = index + 1;
    }

    setSelectionMade(true);
    SetRating(ratingArray);
  }

  const buildRatingOptions = () => {
    const availableRatings = [1, 2, 3, 4, 5];

    return availableRatings.map((el) => {
      return (
        <label
          className={rating.includes(el) ? 'filled' : ''}
          onClick={() => { updateRating(el) }}
          htmlFor={el}>
          <input type="radio" id={el} name={el} value={el} />
          {el}
        </label>
      )
    })
  }

  return (
    <div className={"app"}>
      <form>
        <h1>We love to hear your feedback!</h1>
        <p>On a scale of 1-5 how likely are you to recommend this service?</p>
        {buildRatingOptions()}
        <button>Skip</button>
        <input
          disabled={!selectionMade}
          type="submit"
          value={rating[rating.length]}>
        </input>
      </form>
    </div >
  );
};

export default App;

