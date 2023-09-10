import Buton from './components/buton'
import Pantalla from './components/Pantalla'
import Clear from './components/Clear'
import { evaluate } from 'mathjs'
import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState(''); //asignamos el estado como el valor de la pantalla

  const agregarInput = val => {
    setInput(input + val); //Aca aun trabajamos con cadenas de caracteres, asi que el signo + cumple la funcion de concatenar
  };

  const borrarInput = () => {
    setInput('');
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input)); //Transofrma una cadena de caracteres en expresion matematica
    } else {
      alert('Por Favor Ingrese Valores para Realizar los Cálculos');
    }

  };
  //truthy y falsy, valores que por si solos son verdaderos o falsos las cadenas sin caracteres son falsas y si no estas vacias son verdaderas 


  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Buton manejarClic={agregarInput}>1</Buton>
          <Buton manejarClic={agregarInput}>2</Buton>
          <Buton manejarClic={agregarInput}>3</Buton>
          <Buton manejarClic={agregarInput}>+</Buton>
        </div>
        <div className='fila'>
          <Buton manejarClic={agregarInput}>4</Buton>
          <Buton manejarClic={agregarInput}>5</Buton>
          <Buton manejarClic={agregarInput}>6</Buton>
          <Buton manejarClic={agregarInput}>-</Buton>
        </div>
        <div className='fila'>
          <Buton manejarClic={agregarInput}>7</Buton>
          <Buton manejarClic={agregarInput}>8</Buton>
          <Buton manejarClic={agregarInput}>9</Buton>
          <Buton manejarClic={agregarInput}>*</Buton>
        </div>
        <div className='fila'>
          <Buton manejarClic={calcularResultado}>=</Buton>
          <Buton manejarClic={agregarInput}>0</Buton>
          <Buton manejarClic={agregarInput}>.</Buton>
          <Buton manejarClic={agregarInput}>/</Buton>
        </div>
        <div className='fila'>
          <Clear manejarClear={borrarInput}>
            Clear
          </Clear>
        </div>
      </div>
    </div>
  )
}

export default App
