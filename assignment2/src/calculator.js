import React from "react";
import "./style.css";

const Calculator = () => {
  return (
    <section className="main-container">
      <h2>React Calculator</h2>
      <div className="container">
        <div className="answer">
            <p className="question">04--0-</p>
            <p className="result">1234r4</p>
        </div>
        <div className="buttons">
          <span class="button clear-all first-row">AC</span>
          <span class="button modulo first-row">%</span>
          <span class="button delete first-row"><i class="fa-solid fa-delete-left"></i></span>
          <span class="button square first-row">x<sup>2</sup></span>
          <span class="button inverse del"><sup>1</sup>/x</span>
          <span class="button square-root del">&radic;</span>
          <span class="button operator">/</span>
          <span class="button operator">*</span>
          <span class="button number">7</span>
          <span class="button number">8</span>
          <span class="button number">9</span>
          <span class="button operator">-</span>
          <span class="button number">4</span>
          <span class="button number">5</span>
          <span class="button number">6</span>
          <span class="button operator biggi">+</span>
          <span class="button number">1</span>
          <span class="button number">2</span>
          <span class="button number">3</span>
          <span class="button number zero">0</span>
          <span class="button number point">.</span>
          <span class="button operator equals">=</span>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
