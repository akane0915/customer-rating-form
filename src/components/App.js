import React, { useState } from 'react';
import './styles.scss';

const App = () => {
  const [selectionMade, setselectionMade] = useState(false);
  const [active, setActive] = useState(null);

  const updateActive = (value) => {
    let updatedValue = [];
    const array = new Array(value);

    array.forEach((value, i) => {
      updatedValue.push(i + 1)
    });

    setselectionMade(true);
    setActive(updatedValue.toString());
  }
  return (
    <main className={"app"}>
      <form>
        <h1>We love to hear your feedback!</h1>
        <button
          className={active === '1' ? 'active' : ''}
          onClick={() => { updateActive(1) }}>1</button>
        <button
          className={active === '1,2' ? 'active' : ''}
          onClick={() => { updateActive(2) }}>2</button>
        <button
          className={active === '1,2,3' ? 'active' : ''}
          onClick={() => { updateActive(3) }}>3</button>
        <button
          className={active === '1,2,3,4' ? 'active' : ''}
          onClick={() => { updateActive(4) }}>4</button>
        <button
          className={active === '1,2,3,4,5' ? 'active' : ''}
          onClick={() => { updateActive(5) }}>5</button>
        <button>Skip</button>
        <input
          disabled={!selectionMade}
          type="submit"
          value={active}>
        </input>
      </form>
    </main>
  );
};

export default App;

