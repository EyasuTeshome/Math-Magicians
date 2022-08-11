import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickHandler = (e) => {
    const result = calculate(this.state, e.target.innerHTML);
    this.setState(result);
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calculator-container">
        <article className="article-class">
          <div className="result-display">
            { next ?? total ?? 0 }
          </div>
        </article>
        <article className="article-class">
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">AC</button>
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">+/-</button>
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">%</button>
          <button onClick={this.onClickHandler} type="button" className="last-one-fourth-class">÷</button>
        </article>
        <article className="article-class">
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">7</button>
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">8</button>
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">9</button>
          <button onClick={this.onClickHandler} type="button" className="last-one-fourth-class">x</button>
        </article>
        <article className="article-class">
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">4</button>
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">5</button>
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">6</button>
          <button onClick={this.onClickHandler} type="button" className="last-one-fourth-class">-</button>
        </article>
        <article className="article-class">
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">1</button>
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">2</button>
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">3</button>
          <button onClick={this.onClickHandler} type="button" className="last-one-fourth-class">+</button>
        </article>
        <article className="article-class">
          <button onClick={this.onClickHandler} type="button" className="first-one-fourth-class">0</button>
          <button onClick={this.onClickHandler} type="button" className="one-fourth-class">.</button>
          <button onClick={this.onClickHandler} type="button" className="last-one-fourth-class">=</button>
        </article>
      </div>
    );
  }
}

export default Calculator;
