import React from 'react'
import '../styles/Boton.css'

export default function Boton(props) {
	const esOperador = (valor) => {
		return isNaN(valor) && valor != '.' && valor != '='
		// isNaN sirve para preguntar si una cadena no es un numero
	}

	return (
		<>
			<div
				className={`boton-contenedor ${
					esOperador(props.children) ? 'operador' : ''
				}`.trimEnd()}
				onClick={() => props.manejarClicks(props.children)}>
				{/* trim y trimEnd son metodos para eliminar espaciosn al principio y al final de una cadena de caracteres */}
				{props.children}
			</div>
		</>
	)
}
