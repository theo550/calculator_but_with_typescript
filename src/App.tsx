import './App.css';
import React, {useState} from 'react';


export default function App() {

  const [numberOne, setNumberOne] = useState<string[]>([])
  const [numberTwo, setNumberTwo] = useState<string[]>([])
  const [result, setResult] = useState<number>(0)

  const handleKey = (e: React.MouseEvent<HTMLElement>) => {

    if (result > 0) {
      setNumberOne([])
      setNumberTwo([])
      setResult(0)
    }

    setNumberOne([...numberOne, e.currentTarget.innerText])
  }

  const addTwoArray = (a: string[], b: string[]) => {
    return String(Number(a.join('')) + Number(b.join(''))).split('')
  }

  const handleNumberTwo = () => {

    if (numberTwo.length > 0) {
      setNumberTwo(addTwoArray(numberOne, numberTwo))
    } else if (result > 0) {
      setNumberTwo(String(result).split(''))
      setResult(0)
    } else {
      setNumberTwo(numberOne)
    }
    
    setNumberOne([])
  }

  const addition = (a: number, b: number) => {
    return a + b
  }

  const equal = () => {
    setResult(addition(Number(numberOne.join('')), Number(numberTwo.join(''))))
    setNumberOne([])
    setNumberTwo([])
  }

  const reset = () => {
    setResult(0)
    setNumberOne([])
    setNumberTwo([])
  }

  const handleDel = () => {
    const next = [...numberOne]
    next.pop()
    setNumberOne(next)
  }


  return (
  <div className="App">
    <div className="App-header">
      <div className="calculator">
        <h1>calc</h1>
        <div className="screen">
          <p className='number one'>{result > 0 ? result : numberOne.length > 0 ? numberOne : 0}</p>
          <p className='number two'>{result > 0 ? [] : numberTwo}</p>
        </div>
        <div className="touches">
          <div className='board'>
            <ul>
              <li onClick={handleKey} className="key">7</li>
              <li onClick={handleKey} className="key">8</li>
              <li onClick={handleKey} className="key">9</li>
              <li onClick={handleDel} className="key blue">DEL</li>
              <li onClick={handleKey} className="key">4</li>
              <li onClick={handleKey} className="key">5</li>
              <li onClick={handleKey} className="key">6</li>
              <li onClick={handleNumberTwo} className="key">+</li>
              <li onClick={handleKey} className="key">1</li>
              <li onClick={handleKey} className="key">2</li>
              <li onClick={handleKey} className="key">3</li>
              <li className="key">-</li>
              <li onClick={handleKey} className="key">.</li>
              <li onClick={handleKey} className="key">0</li>
              <li className="key">/</li>
              <li className="key">*</li>
              <li onClick={reset} className="key blue">RESET</li>
              <li onClick={equal} className="key red">=</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
