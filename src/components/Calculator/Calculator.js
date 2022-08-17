import React, { useState } from 'react';
import calculate from '../../logic/calculate';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [stateObj, setStateObj] = useState({ total: '0' });

  const onClickHandler = (e) => {
    const result = calculate(stateObj, e.target.innerHTML);
    setStateObj(result);
  };

  return (
    <div className={styles.calculator_container}>
      <section className={styles.left_section}>
        <h2>Let&apos;s do some math!</h2>
      </section>
      <section className={styles.right_section}>
        <article className={styles.article_class}>
          <div className={styles.result_display}>
            { stateObj.total }
            { stateObj.operation }
            { stateObj.next }
          </div>
        </article>
        <article className={styles.article_class}>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>AC</button>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>+/-</button>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>%</button>
          <button onClick={onClickHandler} type="button" className={styles.last_one_fourth_class}>÷</button>
        </article>
        <article className={styles.article_class}>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>7</button>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>8</button>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>9</button>
          <button onClick={onClickHandler} type="button" className={styles.last_one_fourth_class}>x</button>
        </article>
        <article className={styles.article_class}>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>4</button>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>5</button>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>6</button>
          <button onClick={onClickHandler} type="button" className={styles.last_one_fourth_class}>-</button>
        </article>
        <article className={styles.article_class}>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>1</button>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>2</button>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>3</button>
          <button onClick={onClickHandler} type="button" className={styles.last_one_fourth_class}>+</button>
        </article>
        <article className={styles.article_class}>
          <button onClick={onClickHandler} type="button" className={styles.first_one_fourth_class}>0</button>
          <button onClick={onClickHandler} type="button" className={styles.one_fourth_class}>.</button>
          <button onClick={onClickHandler} type="button" className={styles.last_one_fourth_class}>=</button>
        </article>
      </section>
    </div>
  );
};

export default Calculator;
