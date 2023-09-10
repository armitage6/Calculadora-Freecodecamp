import '../style/Boton.css'

const Buton = (props) => {

  //() => props.manejarClic(props.children) Escribimos una funcion 
  //props.manejarClic(props.children) escribimos una llamada a una funcion


  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=')
  }

  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trim()}
      onClick={() => props.manejarClic(props.children)} >
      {props.children}
    </div>
  )
}

export default Buton
