import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [stateObj, setStateObj] = useState({ total: '0' });

  const onClickHandler = (e) => {
    const result = calculate(stateObj, e.target.innerHTML);
    setStateObj(result);
  };

  return (
    <div className="calculator-container">
      <article className="article-class">
        <div className="result-display">
          { stateObj.total }
          { stateObj.operation }
          { stateObj.next }
        </div>
      </article>
      <article className="article-class">
        <button onClick={onClickHandler} type="button" className="one-fourth-class">AC</button>
        <button onClick={onClickHandler} type="button" className="one-fourth-class">+/-</button>
        <button onClick={onClickHandler} type="button" className="one-fourth-class">%</button>
        <button onClick={onClickHandler} type="button" className="last-one-fourth-class">÷</button>
      </article>
      <article className="article-class">
        <button onClick={onClickHandler} type="button" className="one-fourth-class">7</button>
        <button onClick={onClickHandler} type="button" className="one-fourth-class">8</button>
        <button onClick={onClickHandler} type="button" className="one-fourth-class">9</button>
        <button onClick={onClickHandler} type="button" className="last-one-fourth-class">x</button>
      </article>
      <article className="article-class">
        <button onClick={onClickHandler} type="button" className="one-fourth-class">4</button>
        <button onClick={onClickHandler} type="button" className="one-fourth-class">5</button>
        <button onClick={onClickHandler} type="button" className="one-fourth-class">6</button>
        <button onClick={onClickHandler} type="button" className="last-one-fourth-class">-</button>
      </article>
      <article className="article-class">
        <button onClick={onClickHandler} type="button" className="one-fourth-class">1</button>
        <button onClick={onClickHandler} type="button" className="one-fourth-class">2</button>
        <button onClick={onClickHandler} type="button" className="one-fourth-class">3</button>
        <button onClick={onClickHandler} type="button" className="last-one-fourth-class">+</button>
      </article>
      <article className="article-class">
        <button onClick={onClickHandler} type="button" className="first-one-fourth-class">0</button>
        <button onClick={onClickHandler} type="button" className="one-fourth-class">.</button>
        <button onClick={onClickHandler} type="button" className="last-one-fourth-class">=</button>
      </article>
    </div>
  );
};

export default Calculator;
