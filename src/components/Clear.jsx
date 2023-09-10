import '../style/Clear.css'

const Clear = (props) => {




    return (
        <div className='boton-clear' onClick={() => props.manejarClear()}>
            {props.children}
        </div>
    )
}

export default Clear
