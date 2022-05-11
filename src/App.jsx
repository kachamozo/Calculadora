import './App.css'
import logo from './images/reactGris.png'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {
	const [input, setInput] = useState('')

	function agregarValor(valor) {
		setInput(input + valor)
	}
	function limpiar() {
		setInput('')
	}

	function evaluarResultado() {
		setInput(evaluate(input))
	}

	return (
		<div className='App'>
			<div className='react-logo-contenedor'>
				<img src={logo} alt='Logo react' className='react-logo' />
				<h1>By Kachamozo...!!!</h1>
			</div>
			<div className='contenedor-calculadora'>
				<Pantalla input={input} />{' '}
				{/* le pasamos la prop input con el estado
				input*/}
				<div className='fila'>
					<Boton manejarClicks={agregarValor}>1</Boton>
					<Boton manejarClicks={agregarValor}>2</Boton>
					<Boton manejarClicks={agregarValor}>3</Boton>
					<Boton manejarClicks={agregarValor}>+</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClicks={agregarValor}>4</Boton>
					<Boton manejarClicks={agregarValor}>5</Boton>
					<Boton manejarClicks={agregarValor}>6</Boton>
					<Boton manejarClicks={agregarValor}>-</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClicks={agregarValor}>7</Boton>
					<Boton manejarClicks={agregarValor}>8</Boton>
					<Boton manejarClicks={agregarValor}>9</Boton>
					<Boton manejarClicks={agregarValor}>*</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClicks={evaluarResultado}>=</Boton>
					<Boton manejarClicks={agregarValor}>0</Boton>
					<Boton manejarClicks={agregarValor}>.</Boton>
					<Boton manejarClicks={agregarValor}>/</Boton>
				</div>
				<div className='fila'>
					<BotonClear manejarClear={limpiar}>Clear</BotonClear>
				</div>
			</div>
		</div>
	)
}

export default App
