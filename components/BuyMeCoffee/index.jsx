import React from "react";
import styles from './index.module.scss';
import ScreenEgg from '../ScreenEgg';
import cl from 'classnames';

const BuyMeCoffee = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={(cl(className, styles.buyCoffee))}>
        <a href="https://buy.stripe.com/test_bIY16d8a9emaaB24gg"
          target="_blank"
          className={styles.buyCoffeeButton}
          rel="noreferrer"
        >Buy me a Coffee</a>
      </div>
    </ScreenEgg>
  )
};




export default BuyMeCoffee;