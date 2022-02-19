import { useState } from 'react'
import './App.css'
import Button from './components/Button.js'
import Input  from './components/Input.js'
import * as math from 'mathjs'


const App = () => {

  const [text, setText] = useState('')
  const [result, setResult] = useState('')

  const addtoText = (value) => {
    setText(text=>{
        return text + value
    })
  }

  const resetInput = () => {
    setText('')
    setResult('')
  }

  const undoInput = () => {
    setText(text.substring(0, text.length-1))  
  }

  const calculateResult = () => {
    const result = math.evaluate(text)  //return type: Number    
   
    if(result > Math.pow(2, 32)){
      setResult('超過數字上限！')  
    }else{
      setResult(String(result))
      setText(String(result))
    }
        
  }

  const buttonColor = '#f2a33c'

  return (

    <div className='container'>
      <div className="App">
        <div className="calc-wrapper">
          <Input text={text} result={result}/>
          <div className="row">
            <Button symbol='Clear' handleClick={resetInput} color='#a897f9'/>
            <Button symbol='Back' handleClick={undoInput} color='#a897f9'/>
          </div>
          <div className="row">
            <Button symbol='7' handleClick={addtoText}/>
            <Button symbol='8' handleClick={addtoText}/>
            <Button symbol='9' handleClick={addtoText}/>
            <Button symbol='/' handleClick={addtoText} color={buttonColor}/>
          </div>
          <div className="row">
            <Button symbol='4' handleClick={addtoText}/>
            <Button symbol='5' handleClick={addtoText}/>
            <Button symbol='6' handleClick={addtoText}/>
            <Button symbol='*' handleClick={addtoText} color={buttonColor}/>
          </div>
          <div className="row">
            <Button symbol='1' handleClick={addtoText}/>
            <Button symbol='2' handleClick={addtoText}/>
            <Button symbol='3' handleClick={addtoText}/>
            <Button symbol='-' handleClick={addtoText} color={buttonColor}/>
          </div>
          <div className="row">
            <Button symbol='0' handleClick={addtoText}/>
            <Button symbol='.' handleClick={addtoText}/>
            <Button symbol='=' handleClick={calculateResult}/>
            <Button symbol='+' handleClick={addtoText} color={buttonColor}/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
