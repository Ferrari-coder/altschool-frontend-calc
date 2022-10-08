import React from "react";
import { useState } from "react";
import "./style.css";

const Calculator = () => {
  const [calc, setCalc ] = useState("");
  const [answer, setAnswer] = useState("");

  const oper = ['/', '*','+','-','.','√']

  const updateCalc = value => {
    if (
      oper.includes(value) && calc === '' ||
      oper.includes(value) && oper.includes(calc.slice(-1))
    ) {
      return;
    } 
    setCalc(calc + value);

    if(!oper.includes(value)){
      setAnswer(eval(calc + value).toString()); 
    }
  }
   
 
    const caluculation = () => {
      setCalc(eval(calc).toString());
    }

    const del = () => {
      if (calc === ''){
        return;
      }

      const value = calc.slice(0, -1);
      setCalc(value);
    }
      // for ac
      const reset = () => {
        setAnswer("")
        setCalc("")
      }
  return (
    <section className="main-container">
      <h2>React Calculator</h2>
      <div className="container">
        <div className="answer">
            <p className="question">{calc || "0"}</p>
            <p className="result">{answer ? <span>{answer}</span>: ''}</p>
        </div>
        <div className="buttons">
          <span className="button clear-all first-row" onClick={reset}>AC</span>
          <span className="button bracket first-row" onClick={() => updateCalc('(')}>(</span>
          <span className="button bracket first-row" onClick={() => updateCalc(')')}>)</span>
          <span className="button delete first-row" onClick={del}><i class="fa-solid fa-delete-left"></i></span>
          <span className="button square del" onClick={() => updateCalc('**2')}>x<sup>2</sup></span>
          <span className="button square-root del" onClick={() => updateCalc('**(1/2)')}>&radic;</span>
          <span className="button operator" onClick={() => updateCalc('/')}>/</span>
          <span className="button operator" onClick={() => updateCalc('*')}>*</span>
          <span className="button number" onClick={() => updateCalc('7')}>7</span>
          <span className="button number" onClick={() => updateCalc('8')}>8</span>
          <span className="button number" onClick={() => updateCalc('9')}>9</span>
          <span className="button operator" onClick={() => updateCalc('-')}>-</span>
          <span className="button number" onClick={() => updateCalc('4')}>4</span>
          <span className="button number" onClick={() => updateCalc('5')}>5</span>
          <span className="button number" onClick={() => updateCalc('6')}>6</span>
          <span className="button operator biggi" onClick={() => updateCalc('+')}>+</span>
          <span className="button number" onClick={() => updateCalc('1')}>1</span>
          <span className="button number" onClick={() => updateCalc('2')}>2</span>
          <span className="button number" onClick={() => updateCalc('3')}>3</span>
          <span className="button number zero" onClick={() => updateCalc('0')}>0</span>
          <span className="button number point" onClick={() => updateCalc('.')}>.</span>
          <span className="button operator equals" onClick={caluculation}>=</span>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
