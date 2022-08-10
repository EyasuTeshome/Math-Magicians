import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <article className="article-class">
          <div className="result-display">
            0
          </div>
        </article>
        <article className="article-class">
          <button type="button" className="one-fourth-class">AC</button>
          <button type="button" className="one-fourth-class">+/-</button>
          <button type="button" className="one-fourth-class">%</button>
          <button type="button" className="last-one-fourth-class">&#247;</button>
        </article>
        <article className="article-class">
          <button type="button" className="one-fourth-class">7</button>
          <button type="button" className="one-fourth-class">8</button>
          <button type="button" className="one-fourth-class">9</button>
          <button type="button" className="last-one-fourth-class">x</button>
        </article>
        <article className="article-class">
          <button type="button" className="one-fourth-class">4</button>
          <button type="button" className="one-fourth-class">5</button>
          <button type="button" className="one-fourth-class">6</button>
          <button type="button" className="last-one-fourth-class">-</button>
        </article>
        <article className="article-class">
          <button type="button" className="one-fourth-class">1</button>
          <button type="button" className="one-fourth-class">2</button>
          <button type="button" className="one-fourth-class">3</button>
          <button type="button" className="last-one-fourth-class">+</button>
        </article>
        <article className="article-class">
          <button type="button" className="first-one-fourth-class">0</button>
          <button type="button" className="one-fourth-class">.</button>
          <button type="button" className="last-one-fourth-class">=</button>
        </article>
      </div>
    );
  }
}

export default Calculator;
