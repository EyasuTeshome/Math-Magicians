import React from 'react';
import styles from './Quote.module.css';

const Quotes = [
  ['"It is impossible to be a mathematician without being a poet in soul.” - Sofia Kovalevskaya'],
  ['"A mathematician who is not also something of a poet will never be a complete mathematician." - Karl Weierstrass'],
  ['"Go down deep enough into anything and you will find mathematics." - Dean Schlicter'],
  ['"Why do children dread mathematics? Because of the wrong approach. Because it is looked at as a subject." - Shakuntala Devi'],
  ['"The study of mathematics, like the Nile, begins in minuteness but ends in magnificence." -  Charles Caleb Colton'],
  ['"It is clear that the chief end of mathematical study must be to make the students think." - John Wesley Young'],
];

class Quote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '"I’ve always enjoyed mathematics. It is the most precise and concise way of expressing an idea." - N.R. Narayana Murthy',
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        quote: Quotes[Math.floor(Math.random() * Quotes.length)],
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { quote } = this.state;
    return (
      <div className={styles.quote_container}>
        <div className={styles.quote_text}>{quote}</div>
      </div>
    );
  }
}

export default Quote;
